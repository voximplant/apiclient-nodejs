import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Disable IM packages overrun.
client.Accounts.changeAccountPlan({planType: 'IM',
            mayOverrun: 'false'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});