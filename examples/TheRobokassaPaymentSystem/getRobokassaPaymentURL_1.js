import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Get a URL to make the 2000 RUR payment.
client.TheRobokassaPaymentSystem.getRobokassaPaymentURL({amount: '2000'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});