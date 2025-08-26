const VoximplantApiClient = require('@voximplant/apiclient-nodejs').default;
const client = new VoximplantApiClient();
client.onReady = function () {
  // Deletes a WhatsApp Business phone number.
  client.WABPhoneNumbers.deleteWABPhoneNumber({ wabPhoneNumber: '12126367890' })
    .then((ev) => console.log(ev))
    .catch((err) => console.error(err));
};
