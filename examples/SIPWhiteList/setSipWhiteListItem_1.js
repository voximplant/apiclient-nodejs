const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // undefined
  const ev = await client.SIPWhiteList.setSipWhiteListItem({
    sipWhitelistId: '1',
    sipWhitelistNetwork: '192.168.1.5/16',
  });
  console.log(ev);
})().catch(console.error);
