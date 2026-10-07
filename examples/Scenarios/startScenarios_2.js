const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Start the scripts from the user 1.
  const ev = await client.Scenarios.startScenarios({
    ruleId: '1',
    scriptCustomData: 'mystr',
    userId: '1',
  });
  console.log(ev);
})().catch(console.error);
