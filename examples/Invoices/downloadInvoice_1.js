const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Download the invoice with id = 1.
  const ev = await client.Invoices.downloadInvoice({ invoiceId: '1' });
  console.log(ev);
})().catch(console.error);
