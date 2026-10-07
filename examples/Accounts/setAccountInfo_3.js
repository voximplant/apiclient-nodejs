const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Set the billing address.
  const ev = await client.Accounts.setAccountInfo({
    billingAddressName: 'Acme_Corp',
    billingAddressCountryCode: 'US',
    billingAddressZip: '94086',
    billingAddressAddress: '900, Kifer Road, Sunnyvale, CA',
    billingAddressPhone: '14445557777',
  });
  console.log(ev);
})().catch(console.error);
