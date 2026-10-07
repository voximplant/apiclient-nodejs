const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get the two callerIDs.
  const ev = await client.CallerIDs.getCallerIDs({ count: '2' });
  console.log(ev);
})().catch(console.error);
