const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Delete SIP registration with id 1.
  const ev = await client.SIPRegistration.deleteSipRegistration({ sipRegistrationId: '1' });
  console.log(ev);
})().catch(console.error);
