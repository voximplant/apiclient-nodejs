import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Get the recommended money amount to charge in USD.
client.Accounts.getMoneyAmountToCharge({})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});