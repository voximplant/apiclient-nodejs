const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // undefined
  const ev = await client.PSTNBlacklist.delPstnBlackListItem({ pstnBlacklistId: '1' });
  console.log(ev);
})().catch(console.error);
