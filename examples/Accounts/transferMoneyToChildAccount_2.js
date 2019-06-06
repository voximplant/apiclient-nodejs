import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Transfer 5.67 $ from the child account 1 to the parent account.
client.Accounts.transferMoneyToChildAccount({childAccountId: '1',
            amount: '-5.67'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});