const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // GetAccountInvoices example.
  const ev = await client.Invoices.getAccountInvoices({});
  console.log(ev);
})().catch(console.error);
