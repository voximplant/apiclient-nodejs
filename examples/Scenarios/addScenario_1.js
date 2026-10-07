const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Add a new scenario: var s='hello';
  const ev = await client.Scenarios.addScenario({
    scenarioName: 'call_scenario',
    scenarioScript: 'var s="hello";',
  });
  console.log(ev);
})().catch(console.error);
