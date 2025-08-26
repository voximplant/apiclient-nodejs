const VoximplantApiClient = require('@voximplant/apiclient-nodejs').default;
const client = new VoximplantApiClient();
client.onReady = function () {
  // Adds a new WhatsApp Business phone number.
  client.WABPhoneNumbers.addWABPhoneNumber({
    wabPhoneNumber: '12126367890',
    voicePassword: 'abc',
    applicationId: '1234',
    ruleId: '5678',
  })
    .then((ev) => console.log(ev))
    .catch((err) => console.error(err));
};
