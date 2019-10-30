const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Deactivates the subscription with ID = 20 and subscription_finish_date = September 29th 2019.
  client.ChildAccounts.deactivateChildAccountSubscription({subscriptionId: '20',
            childAccountId: '10',
            subscriptionFinishDate: new Date('2019-09-29 00:00:00 GMT')})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};