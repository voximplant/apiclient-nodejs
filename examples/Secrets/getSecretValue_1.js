const VoximplantApiClient = require('@voximplant/apiclient-nodejs').default;
const client = new VoximplantApiClient();
client.onReady = function () {
  // Get the value of secret 10.
  client.Secrets.getSecretValue({ applicationId: '1', secretId: '10' })
    .then((ev) => console.log(ev))
    .catch((err) => console.error(err));
};
