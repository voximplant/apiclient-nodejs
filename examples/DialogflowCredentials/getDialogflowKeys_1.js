const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // Get push credentials.
  client.DialogflowCredentials.getDialogflowKeys({dialogflowKeyId: '1'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};