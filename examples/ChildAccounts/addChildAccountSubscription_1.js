const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Create a subscription for the child account with ID = 10 using the subscription template with ID = 184.
  client.ChildAccounts.addChildAccountSubscription({childAccountId: '10',
            subscriptionTemplateId: '184',
            subscriptionName: 'Meaningful subscription name'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};