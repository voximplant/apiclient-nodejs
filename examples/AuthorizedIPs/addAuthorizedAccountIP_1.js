const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Add the 92.255.220.0/24 network to the white list.
  const ev = await client.AuthorizedIPs.addAuthorizedAccountIP({ authorizedIp: '92.255.220.0/24' });
  console.log(ev);
})().catch(console.error);
