const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // Enable the auto charging.
  client.TheCreditCards.config_card_payments({autoCharge: 'true',
            minBalance: '5',
            cardOverrunValue: '10'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};