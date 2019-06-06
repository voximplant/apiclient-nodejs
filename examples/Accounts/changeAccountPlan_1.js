const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Disable IM packages overrun.
  client.Accounts.changeAccountPlan({planType: 'IM',
            mayOverrun: 'false'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};