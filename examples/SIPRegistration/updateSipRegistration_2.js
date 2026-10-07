const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Bind SIP registration with id 1 to the application with id 123.
  const ev = await client.SIPRegistration.updateSipRegistration({
    sipRegistrationId: '1',
    applicationId: '123',
  });
  console.log(ev);
})().catch(console.error);
