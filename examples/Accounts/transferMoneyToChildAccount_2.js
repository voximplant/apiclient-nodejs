const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // Transfer 5.67 $ from the child account 1 to the parent account.
  client.Accounts.transferMoneyToChildAccount({childAccountId: '1',
            amount: '-5.67'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};