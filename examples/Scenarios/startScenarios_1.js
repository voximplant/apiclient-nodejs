const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Start the scripts from the account.
  const ev = await client.Scenarios.startScenarios({ ruleId: '1', scriptCustomData: 'mystr' });
  console.log(ev);
})().catch(console.error);
