const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get two networks, but skip the first one.
  const ev = await client.SIPWhiteList.getSipWhiteList({ offset: '1', count: '2' });
  console.log(ev);
})().catch(console.error);
