const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Cancel list with id = 1.
  const ev = await client.CallLists.stopCallListProcessing({ listId: '1' });
  console.log(ev);
})().catch(console.error);
