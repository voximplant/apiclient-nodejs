const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Get the SIP registration subscription template.
  client.Accounts.getSubscriptionPrice({subscriptionTemplateType: 'SIP_REGISTRATION'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};