const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Transfer 5.67 $ to the child account 1 and transfer 5.67 $ to the child account 2 too. The parent account spends 2*5.67= 11.34 $ in total.
  client.Accounts.transferMoneyToChildAccount({childAccountId: '1;2',
            amount: '5.67'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};