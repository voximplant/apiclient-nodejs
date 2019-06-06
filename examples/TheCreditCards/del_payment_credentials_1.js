import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Deletes the default credit card.
client.TheCreditCards.del_payment_credentials({})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});