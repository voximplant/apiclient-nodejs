const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Delete the all rules from the application 1.
  const ev = await client.Rules.delRule({ ruleId: 'all', applicationId: '1' });
  console.log(ev);
})().catch(console.error);
