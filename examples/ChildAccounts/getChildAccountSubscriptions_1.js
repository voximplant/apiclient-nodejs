const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Get the subscription with ID = 20.
  client.ChildAccounts.getChildAccountSubscriptions({childAccountId: '10',
            subscriptionId: '20'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};