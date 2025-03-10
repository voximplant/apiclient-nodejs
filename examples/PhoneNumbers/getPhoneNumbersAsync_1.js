const VoximplantApiClient = require('@voximplant/apiclient-nodejs').default;
const client = new VoximplantApiClient();
client.onReady = function () {
  // Get two attached phone numbers.
  client.PhoneNumbers.getPhoneNumbersAsync({})
    .then((ev) => console.log(ev))
    .catch((err) => console.error(err));
};
