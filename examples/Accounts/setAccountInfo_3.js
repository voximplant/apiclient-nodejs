import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Set the billing address.
client.Accounts.setAccountInfo({billingAddressName: 'your_company',
            billingAddressCountryCode: 'US',
            billingAddressZip: '94086',
            billingAddressAddress: '900%2C Kifer Road%2C Sunnyvale%2C CA',
            billingAddressPhone: '14445557777'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});