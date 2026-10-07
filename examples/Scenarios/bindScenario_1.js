const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Bind the scenarios 1, 2 and 3 with the rule 1.
  const ev = await client.Scenarios.bindScenario({ scenarioId: '1;2;3', ruleId: '1' });
  console.log(ev);
})().catch(console.error);
