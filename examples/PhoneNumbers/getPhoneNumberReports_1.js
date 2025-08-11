const VoximplantApiClient = require('@voximplant/apiclient-nodejs').default;
const client = new VoximplantApiClient();
client.onReady = function () {
  // Get all the reports.
  client.PhoneNumbers.getPhoneNumberReports({})
    .then((ev) => console.log(ev))
    .catch((err) => console.error(err));
};
