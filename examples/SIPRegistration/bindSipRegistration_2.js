const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Unbind the user with id 123 from all SIP registrations.
  const ev = await client.SIPRegistration.bindSipRegistration({ userId: '123', bind: 'false' });
  console.log(ev);
})().catch(console.error);
