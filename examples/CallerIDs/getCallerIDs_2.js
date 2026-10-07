const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Try to find the 79997770044 CID.
  const ev = await client.CallerIDs.getCallerIDs({ calleridNumber: '79997770044' });
  console.log(ev);
})().catch(console.error);
