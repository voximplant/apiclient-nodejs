# Migrating to 5.0.0

Use this guide only when you move from `@voximplant/apiclient-nodejs` **4.x.x** or older version to **5.0.0+**.

Version 5.0.0 requires Node.js 22 or newer. The package stays CommonJS. Method names, group
names, and the credentials file are unchanged.

## Node.js 22

`package.json` declares `"engines": { "node": ">=22" }`. Install and run the client on Node.js 22
or newer.

## Import the named export

CommonJS before:

```js
const VoximplantApiClient = require('@voximplant/apiclient-nodejs').default;
```

CommonJS after:

```js
const {VoximplantApiClient} = require('@voximplant/apiclient-nodejs');
```

ESM and TypeScript (`module: node16` or `nodenext`) before:

```ts
import VoximplantApiClient from '@voximplant/apiclient-nodejs';
```

ESM and TypeScript after:

```ts
import {VoximplantApiClient, VoximplantApiClientParameters} from '@voximplant/apiclient-nodejs';
```

`VoximplantApiClientParameters` is the constructor options object (`pathToCredentials`, `host`,
`accountId`, `externalLogging`).

## Wait for credentials with ready ()

`onReady` is removed. The constructor still starts reading the key file. `ready()` is that read
as a promise. Call API methods after it resolves.

```js
const {VoximplantApiClient} = require('@voximplant/apiclient-nodejs');

const client = new VoximplantApiClient({
    pathToCredentials: '/path/to/credentials.json',
});
await client.ready();
const apps = await client.Applications.getApplications({});
```

The constructor takes that options object. A credentials path string, and a separate host argument,
are not accepted. Set `host` on the object. `VOXIMPLANT_CREDENTIALS` still overrides
`pathToCredentials`. A missing file or invalid JSON rejects `ready()`.

`externalLogging: true` still logs request payloads and HTTP responses with `console.log`. Any
other value leaves logging off.

## Nested dates and nulls

Nested field names stay camelCase (`endReason`, `callId`, `startTime`), same as the previous
release.

Nested `timestamp` and `date` values are now `Date` instances parsed as GMT. The previous release
left those nested values as the wire string (`2025-10-27 10:58:24`). Top-level timestamp fields
were already `Date`.

```js
const history = await client.History.getCallHistory({
    fromDate: new Date('2025-10-27 00:00:00 GMT'),
    toDate: new Date('2025-10-28 00:00:00 GMT'),
    withCalls: true,
    timezone: 'Etc/GMT',
});

const call = history.result[0].calls[0];
call.endReason;
call.callId;
call.startTime.getTime() === Date.UTC(2025, 9, 27, 10, 58, 24);
```

A JSON `null` for an optional nested object stays `null` (`billingLimits: null`). The previous
release rejected the call in that case. A `null` list or a `null` list entry also stays `null`.
A field omitted by the API stays `undefined`. Fields marked hidden in the API spec are omitted.

Request fields are still camelCase (`fromDate`, `ruleId`, `smsBody`). Pass `Date` objects for
`timestamp` and `date` parameters, as before.

## HTTP client

Requests use the global `fetch` and `FormData`. Axios is no longer a dependency.

HTTP failures reject with an `Error` whose message is `Request failed with status code <status>`.
The error has `error.response`:

```js
error.response.status;   // number
error.response.headers;  // plain object
error.response.data;     // parsed JSON, or the raw text when the body is not JSON
```

An empty error body sets `data` to `''`. A successful empty body becomes `{}`.

`error.isAxiosError` and `error.config` are not set. `headers` has no Axios `.get()` method.
There is no `agent`, timeout, or interceptor option.

`HTTPS_PROXY` and `HTTP_PROXY` are not applied. A host that relied on those variables fails with
a network `TypeError` until the process has its own proxy (`global-agent`, an `undici`
`ProxyAgent`, or system routing).

File downloads (`content-type` starting with `application/octet-stream`) still resolve to an
object whose `fileContent` is a `Buffer`.
