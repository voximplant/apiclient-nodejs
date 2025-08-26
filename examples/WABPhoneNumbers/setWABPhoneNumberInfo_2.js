const VoximplantApiClient = require('@voximplant/apiclient-nodejs').default;
const client = new VoximplantApiClient();
client.onReady = function () {
  //
  client.WABPhoneNumbers.setWABPhoneNumberInfo({
    wabPhoneNumber: '12126367890',
    description: 'my number',
  })
    .then((ev) => console.log(ev))
    .catch((err) => console.error(err));
};
