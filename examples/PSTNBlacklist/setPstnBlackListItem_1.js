const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // undefined
  const ev = await client.PSTNBlacklist.setPstnBlackListItem({
    pstnBlacklistPhone: '123456789',
    pstnBlacklistId: '1',
  });
  console.log(ev);
})().catch(console.error);
