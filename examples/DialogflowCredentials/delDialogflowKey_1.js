const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Remove key.
  const ev = await client.DialogflowCredentials.delDialogflowKey({ dialogflowKeyId: '1' });
  console.log(ev);
})().catch(console.error);
