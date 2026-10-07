const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get all active sip registrations.
  const ev = await client.SIPRegistration.getSipRegistrations({});
  console.log(ev);
})().catch(console.error);
