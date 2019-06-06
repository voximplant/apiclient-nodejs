import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Charge the all frozen phone numbers.
client.Accounts.chargeAccount({phoneNumber: 'all'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});