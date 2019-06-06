# Voximplant API client library
#### Version 1.0

## Prerequisites

In order to use Voximplant Node.js SDK, you need the following:
1. A developer account. If you don't have one, [sign up here](https://voximplant.com/sign-up/).
1. A private API key. 
1. Node.js >=10

## How to use

Go to your project folder and install the SDK using `npm`:

```bash 
npm i --save @voximplant/apiclient-nodejs
```

Then import the SDK in your script

```js
import VoximplantApiClient from '@voximplant/apiclient-nodejs';
```

Next, specify the path to the file with the __result__ value either in the constructor or using the environment.

__constructor__:

```js
const client = new VoximplantApiClient("/path/to/credentials.json")
```

__env__:
```bash
export VOXIMPLANT_CREDENTIALS=/path/to/credentials.json
```

From now on you have access to the SDK methods.

See examples in the project repos