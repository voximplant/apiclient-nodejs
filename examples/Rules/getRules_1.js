const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get the first rule for the template 74951234567.
  const ev = await client.Rules.getRules({
    applicationId: '1',
    template: '74951234567',
    withScenarios: 'true',
    count: '1',
  });
  console.log(ev);
})().catch(console.error);
