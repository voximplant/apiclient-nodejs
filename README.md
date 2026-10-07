# Voximplant API client library

#### Version 5.0.0

> **WARNING: Breaking change in 5.0.0 — you should migrate**
>
> From **5.0.0**, the client is a named export, credentials load through `await client.ready()` after
> `new VoximplantApiClient(parameters)`, and HTTP uses `fetch`.
> Versions **4.x** (including 4.11.0 and any later 4.x update) keep the previous API. Use the table when you upgrade
> from 4.x to 5.0.0 or later.
>
> | | **4.x** | **5.0.0+** |
> | --- | --- | --- |
> | Node.js | `>= 11` | `>= 22` |
> | Import | `require('@voximplant/apiclient-nodejs').default` | `const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs')` |
> | Startup | `client.onReady = function () {}` | `const client = new VoximplantApiClient(parameters)` then `await client.ready()` |
> | HTTP | Axios | native `fetch` |
> | Nested `timestamp` / `date` | wire string `YYYY-MM-DD HH:mm:ss` | GMT `Date` |
> | Null nested object | the call rejects | the value stays `null` |
>
> **Before you call the API after upgrading**, switch to the named export, construct the client, and wait with
> `await client.ready()`. Read nested timestamps as `Date`. `onReady` is removed, and HTTP errors no longer carry
> `error.isAxiosError` or `error.config`.
>
> Samples for each row are in [MIGRATION.md](./MIGRATION.md). Until you migrate, existing 4.x code will not run on
> 5.0.0.

## Prerequisites

In order to use Voximplant Node.js SDK, you need the following:

1. A developer account. If you don't have one, [sign up here](https://voximplant.com/sign-up/).
2. A private API key. There are 2 options to obtain it:
    1. Generate it in the [Voximplant Control panel](https://manage.voximplant.com/settings/service_accounts)
    2. Call the [CreateKey](https://voximplant.com/docs/references/httpapi/managing_role_system#createkey) HTTP API
       method with the
       specified [authentication parameters](https://voximplant.com/docs/references/httpapi/auth_parameters). You'll
       receive a response with the **result** field in it. Save the **result** value in a file (since we don't store the
       keys, save it securely on your side).
3. Node.js >= 22

## How to use

Go to your project folder and install the SDK using `npm`:

```bash
npm i --save @voximplant/apiclient-nodejs
```

Then import the SDK in your script. CommonJS:

```js
const {VoximplantApiClient} = require('@voximplant/apiclient-nodejs');
```

ESM (or TypeScript with `module: node16` / `nodenext`):

```js
import {VoximplantApiClient, VoximplantApiClientParameters} from '@voximplant/apiclient-nodejs';
```

Next, specify the path to the file with the **result** value either in the constructor or using the environment.

**constructor**:

```js
const parameters = {
    pathToCredentials: '/path/to/credentials.json',
    // Optional: log raw request/response payloads via console.log
    externalLogging: true,
};
const client = new VoximplantApiClient(parameters);
await client.ready();
```

**env**:

```bash
export VOXIMPLANT_CREDENTIALS=/path/to/credentials.json
```

`externalLogging` is off by default. When enabled, the client logs request payloads and HTTP
responses (including failed HTTP responses) with `console.log`.

Nested response structures are converted to camelCase only (matching the TypeScript types).
Nested `timestamp` and `date` fields are `Date` instances, parsed as GMT.

## Examples

### Start a scenario

```js
const {VoximplantApiClient} = require('@voximplant/apiclient-nodejs');

(async () => {
    const client = new VoximplantApiClient();
    await client.ready();
    // Start the scripts from the account.
    const ev = await client.Scenarios.startScenarios({ruleId: '1', scriptCustomData: 'mystr'});
    console.log(ev);
})().catch(console.error);
```

### Send an SMS

```js
const {VoximplantApiClient} = require('@voximplant/apiclient-nodejs');

(async () => {
    const client = new VoximplantApiClient();
    await client.ready();
    // Send the SMS message with text "Test message" from the phone number 447443332211 to the phone number 447443332212.
    const ev = await client.SMS.sendSmsMessage({
        source: '447443332211',
        destination: '447443332212',
        smsBody: 'Test message',
    });
    console.log(ev);
})().catch(console.error);
```

### Get a call history item

```js
const {VoximplantApiClient} = require('@voximplant/apiclient-nodejs');

(async () => {
    const client = new VoximplantApiClient();
    await client.ready();
    // Get the first call session history record from the 2012-01-01 00:00:00 UTC to the 2014-01-01 00:00:00 UTC
    const ev = await client.History.getCallHistory({
        fromDate: new Date('2012-01-01 00:00:00 GMT'),
        toDate: new Date('2014-01-01 00:00:00 GMT'),
        count: '1',
        timezone: 'Etc/GMT',
    });
    console.log(ev);
})().catch(console.error);
```
