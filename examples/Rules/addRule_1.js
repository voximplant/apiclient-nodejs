const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Add a new rule.
  const ev = await client.Rules.addRule({
    applicationId: '1',
    ruleName: 'allowall',
    rulePattern: '.*',
  });
  console.log(ev);
})().catch(console.error);
