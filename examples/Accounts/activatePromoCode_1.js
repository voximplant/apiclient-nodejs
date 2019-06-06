const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // Activate the promo code: SECR001
  client.Accounts.activatePromoCode({promoCode: 'SECR001'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};