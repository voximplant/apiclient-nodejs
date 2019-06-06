import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Activate the promo code: SECR001
client.Accounts.activatePromoCode({promoCode: 'SECR001'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});