const VoximplantApiClient = require('@voximplant/apiclient-nodejs').default;
const client = new VoximplantApiClient();
client.onReady = function () {
  // Check if the phone number belongs to the account.
  client.PhoneNumbers.isAccountPhoneNumber({ phoneNumber: '79991234567' })
    .then((ev) => console.log(ev))
    .catch((err) => console.error(err));
};
