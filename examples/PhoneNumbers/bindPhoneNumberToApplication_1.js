const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Bind the phone 1 to the application 1.
  const ev = await client.PhoneNumbers.bindPhoneNumberToApplication({
    phoneId: '1',
    applicationId: '1',
  });
  console.log(ev);
})().catch(console.error);
