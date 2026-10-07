const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get all the reports.
  const ev = await client.PhoneNumbers.getPhoneNumberReports({});
  console.log(ev);
})().catch(console.error);
