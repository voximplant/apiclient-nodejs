const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // undefined
  const ev = await client.AuthorizedIPs.checkAuthorizedAccountIP({
    authorizedIp: '92.255.220.0/24',
  });
  console.log(ev);
})().catch(console.error);
