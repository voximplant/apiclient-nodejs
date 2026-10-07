const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Update SIP registration with id 1.
  const ev = await client.SIPRegistration.updateSipRegistration({
    sipRegistrationId: '1',
    sipUsername: 'HedyLamarr',
    outboundProxy: '12',
    password: '123456',
  });
  console.log(ev);
})().catch(console.error);
