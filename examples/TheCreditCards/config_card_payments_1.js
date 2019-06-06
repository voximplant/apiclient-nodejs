import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Enable the auto charging.
client.TheCreditCards.config_card_payments({autoCharge: 'true',
            minBalance: '5',
            cardOverrunValue: '10'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});