import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Get the SIP registration subscription template.
client.Accounts.getSubscriptionPrice({subscriptionTemplateType: 'SIP_REGISTRATION'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});