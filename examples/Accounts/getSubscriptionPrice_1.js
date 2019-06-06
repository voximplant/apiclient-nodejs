import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Get the all subscription template prices.
client.Accounts.getSubscriptionPrice({})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});