import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Change the IM plan.
client.Accounts.changeAccountPlan({planType: 'IM',
            planSubscriptionTemplateId: '3'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});