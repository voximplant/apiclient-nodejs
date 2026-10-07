const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Delete the 92.255.220.0/24 network from all the lists.
  const ev = await client.AuthorizedIPs.delAuthorizedAccountIP({ authorizedIp: '92.255.220.0/24' });
  console.log(ev);
})().catch(console.error);
