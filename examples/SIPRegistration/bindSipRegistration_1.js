const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Bind SIP registration with id 1 to application with id 123.
  const ev = await client.SIPRegistration.bindSipRegistration({
    applicationId: '123',
    sipRegistrationId: '1',
    bind: 'true',
  });
  console.log(ev);
})().catch(console.error);
