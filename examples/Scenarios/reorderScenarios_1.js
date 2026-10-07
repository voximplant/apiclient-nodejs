const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Set the scenario loading order: 17, 15, 20.
  const ev = await client.Scenarios.reorderScenarios({ ruleId: '2', scenarioId: '17;15;20' });
  console.log(ev);
})().catch(console.error);
