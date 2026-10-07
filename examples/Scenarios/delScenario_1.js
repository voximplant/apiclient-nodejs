const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Delete the scenario 1 and 3.
  const ev = await client.Scenarios.delScenario({ scenarioId: '1;3' });
  console.log(ev);
})().catch(console.error);
