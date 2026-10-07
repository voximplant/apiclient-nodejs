const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Set the rule selection order: 1, 7, 3.
  const ev = await client.Rules.reorderRules({ ruleId: '1;7;3' });
  console.log(ev);
})().catch(console.error);
