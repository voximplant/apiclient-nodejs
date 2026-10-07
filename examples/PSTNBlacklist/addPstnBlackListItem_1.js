const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // undefined
  const ev = await client.PSTNBlacklist.addPstnBlackListItem({ pstnBlacklistPhone: '123456789' });
  console.log(ev);
})().catch(console.error);
