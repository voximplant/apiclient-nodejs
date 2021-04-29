# Voximplant API client library

Version 2.0

## Prerequisites

In order to use Voximplant Node.js SDK, you need the following:

1. A developer account. If you don't have one, [sign up here](https://voximplant.com/sign-up/).
1. A private API key. There are 2 options to obtain it:
    1. Generate it in the [Voximplant Control panel](https://manage.voximplant.com/settings/service_accounts)
    1. Call the [CreateKey](https://voximplant.com/docs/references/httpapi/managing_role_system#createkey) HTTP API
       method with the
       specified [authentication parameters](https://voximplant.com/docs/references/httpapi/auth_parameters). You'll
       receive a response with the **result** field in it. Save the **result** value in a file (since we don't store the
       keys, save it securely on your side).
1. Node.js >= 11

## How to use

Go to your project folder and install the SDK using `npm`:

```bash
npm i --save @voximplant/apiclient-nodejs
```

Then import the SDK in your script

```js
const VoximplantApiClient = require('@voximplant/apiclient-nodejs').default;
```

Next, specify the path to the file with the **result** value either in the constructor or using the environment.

**constructor**:

```js
const client = new VoximplantApiClient('/path/to/credentials.json');
```

**env**:

```bash
export VOXIMPLANT_CREDENTIALS=/path/to/credentials.json
```

## Examples

### Start a scenario

```js
const VoximplantApiClient = require('@voximplant/apiclient-nodejs').default;
const client = new VoximplantApiClient();
client.onReady = function () {
  // Start the scripts from the account.
  client.Scenarios.startScenarios({ ruleId: '1', scriptCustomData: 'mystr' })
    .then((ev) => console.log(ev))
    .catch((err) => console.error(err));
};
```

### Send an SMS

```js
const VoximplantApiClient = require('@voximplant/apiclient-nodejs').default;
const client = new VoximplantApiClient();
client.onReady = function () {
  // Send the SMS message with text "Test message" from the phone number 447443332211 to the phone number 447443332212.
  client.SMS.sendSmsMessage({
    source: '447443332211',
    destination: '447443332212',
    smsBody: 'Test message',
  })
    .then((ev) => console.log(ev))
    .catch((err) => console.error(err));
};
```

### Get a call history item

```js
const VoximplantApiClient = require('@voximplant/apiclient-nodejs').default;
const client = new VoximplantApiClient();
client.onReady = function () {
  // Get the first call session history record from the 2012-01-01 00:00:00 UTC to the 2014-01-01 00:00:00 UTC
  client.History.getCallHistory({
    fromDate: new Date('2012-01-01 00:00:00 GMT'),
    toDate: new Date('2014-01-01 00:00:00 GMT'),
    count: '1',
    timezone: 'Etc/GMT',
  })
    .then((ev) => console.log(ev))
    .catch((err) => console.error(err));
};
```
