const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Delete the all rules from the all applications.
  const ev = await client.Rules.delRule({ ruleId: 'all', applicationId: 'all' });
  console.log(ev);
})().catch(console.error);
