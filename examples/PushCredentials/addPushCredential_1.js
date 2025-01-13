const VoximplantApiClient = require('@voximplant/apiclient-nodejs').default;
const client = new VoximplantApiClient();
client.onReady = function () {
  // Add new Google credentials.
  client.PushCredentials.addPushCredential({ pushProviderName: 'GOOGLE' })
    .then((ev) => console.log(ev))
    .catch((err) => console.error(err));
};
