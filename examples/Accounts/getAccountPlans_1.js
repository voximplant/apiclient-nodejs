import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Get all account plans with packages.
client.Accounts.getAccountPlans({})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});