import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Gets the saved credit cards.
client.TheCreditCards.get_payment_credentials({})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});