const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Create SIP registration.
  const ev = await client.SIPRegistration.createSipRegistration({
    sipUsername: 'JohnGalt',
    proxy: 'localhost',
  });
  console.log(ev);
})().catch(console.error);
