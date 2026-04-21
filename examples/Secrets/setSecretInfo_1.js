const VoximplantApiClient = require('@voximplant/apiclient-nodejs').default;
const client = new VoximplantApiClient();
client.onReady = function () {
  // Update the value for secret 10.
  client.Secrets.setSecretInfo({ applicationId: '1', secretId: '10', secretValue: 'newsecret456' })
    .then((ev) => console.log(ev))
    .catch((err) => console.error(err));
};
