const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Change the IM plan.
  client.Accounts.changeAccountPlan({planType: 'IM',
            planSubscriptionTemplateId: '3'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};