const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Get the price to call to the phone number 79263332211.
  client.Accounts.getResourcePrice({resourceType: 'PSTNOUT',
            resourceParam: '79263332211'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};