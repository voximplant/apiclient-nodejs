import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Transfer the all money from the user 1 to the parent account.
client.Users.transferMoneyToUser({userId: '1',
            amount: '-10000000',
            strictMode: 'false'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});