import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Transfer 5.67 $ from the user 1 to the account.
client.Users.transferMoneyToUser({userId: '1',
            amount: '-5.67'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});