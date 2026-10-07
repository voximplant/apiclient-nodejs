const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get the price to call to the phone number 79263332211.
  const ev = await client.Accounts.getResourcePrice({
    resourceType: 'PSTNOUT',
    resourceParam: '79263332211',
  });
  console.log(ev);
})().catch(console.error);
