const VoximplantApiClient = require('@voximplant/apiclient-nodejs').default;
const client = new VoximplantApiClient();
client.onReady = function () {
  // Download the invoice with id = 1.
  client.Invoices.downloadInvoice({ invoiceId: '1' })
    .then((ev) => console.log(ev))
    .catch((err) => console.error(err));
};
