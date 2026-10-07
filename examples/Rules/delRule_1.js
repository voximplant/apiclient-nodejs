const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Delete the rule 1 and 3.
  const ev = await client.Rules.delRule({ ruleId: '1;3' });
  console.log(ev);
})().catch(console.error);
