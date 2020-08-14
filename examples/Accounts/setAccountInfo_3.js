const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Set the billing address.
  client.Accounts.setAccountInfo({billingAddressName: 'Acme_Corp',
            billingAddressCountryCode: 'US',
            billingAddressZip: '94086',
            billingAddressAddress: '900, Kifer Road, Sunnyvale, CA',
            billingAddressPhone: '14445557777'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};