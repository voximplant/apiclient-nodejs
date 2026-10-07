const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Bind a Dialogflow key to the application.
  const ev = await client.DialogflowCredentials.bindDialogflowKeys({
    dialogflowKeyId: '1',
    applicationId: '1',
  });
  console.log(ev);
})().catch(console.error);
