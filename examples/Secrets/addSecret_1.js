const VoximplantApiClient = require('@voximplant/apiclient-nodejs').default;
const client = new VoximplantApiClient();
client.onReady = function () {
  // Add a new secret to application 1
  client.Secrets.addSecret({
    applicationId: '1',
    secretName: 'some_secret_name',
    secretValue: 'secret123',
  })
    .then((ev) => console.log(ev))
    .catch((err) => console.error(err));
};
