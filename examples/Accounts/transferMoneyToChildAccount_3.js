const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Transfer the all money from the child account 1 to the parent account.
  client.Accounts.transferMoneyToChildAccount({childAccountId: '1',
            amount: '-10000000',
            strictMode: 'false'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};