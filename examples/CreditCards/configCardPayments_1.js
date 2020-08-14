const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Enable the auto charging.
  client.CreditCards.configCardPayments({autoCharge: 'true',
            minBalance: '5',
            cardOverrunValue: '10'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};