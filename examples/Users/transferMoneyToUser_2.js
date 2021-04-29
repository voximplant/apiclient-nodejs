const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Transfer 5.67 $ from the user 1 to the account.
  client.Users.transferMoneyToUser({userId: '1',
            amount: '-5.67',
            currency: 'USD'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};