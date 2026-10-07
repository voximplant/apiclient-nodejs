const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Delete the all scenarios.
  const ev = await client.Scenarios.delScenario({ scenarioId: 'all' });
  console.log(ev);
})().catch(console.error);
