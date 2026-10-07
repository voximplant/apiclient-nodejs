const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Show the all items.
  const ev = await client.AuthorizedIPs.getAuthorizedAccountIPs({});
  console.log(ev);
})().catch(console.error);
