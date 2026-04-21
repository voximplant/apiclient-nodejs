const VoximplantApiClient = require('@voximplant/apiclient-nodejs').default;
const client = new VoximplantApiClient();
client.onReady = function () {
  // Delete secret with ID 10.
  client.Secrets.delSecret({ applicationId: '1', secretId: '10' })
    .then((ev) => console.log(ev))
    .catch((err) => console.error(err));
};
