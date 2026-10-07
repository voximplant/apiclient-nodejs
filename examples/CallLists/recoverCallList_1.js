const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Restore list with id = 1.
  const ev = await client.CallLists.recoverCallList({ listId: '1' });
  console.log(ev);
})().catch(console.error);
