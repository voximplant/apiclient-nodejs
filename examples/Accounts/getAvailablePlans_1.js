import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Get allowed IM plans to change.
client.Accounts.getAvailablePlans({planType: 'IM'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});