const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get all lists registered by user.
  const ev = await client.CallLists.getCallLists({});
  console.log(ev);
})().catch(console.error);
