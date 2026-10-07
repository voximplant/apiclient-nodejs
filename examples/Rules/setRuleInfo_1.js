const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Deny all.
  const ev = await client.Rules.setRuleInfo({
    ruleId: '1',
    ruleName: 'denyall',
    rulePatternExclude: '.*',
  });
  console.log(ev);
})().catch(console.error);
