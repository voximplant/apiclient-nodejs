const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Change the IM plan.
  const ev = await client.Accounts.changeAccountPlan({
    planType: 'IM',
    planSubscriptionTemplateId: '3',
  });
  console.log(ev);
})().catch(console.error);
