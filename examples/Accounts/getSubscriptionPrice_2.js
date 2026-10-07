const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get the SIP registration subscription template.
  const ev = await client.Accounts.getSubscriptionPrice({
    subscriptionTemplateType: 'SIP_REGISTRATION',
  });
  console.log(ev);
})().catch(console.error);
