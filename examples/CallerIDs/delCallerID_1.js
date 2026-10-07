const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Delete the callerID 1.
  const ev = await client.CallerIDs.delCallerID({ calleridId: '1' });
  console.log(ev);
})().catch(console.error);
