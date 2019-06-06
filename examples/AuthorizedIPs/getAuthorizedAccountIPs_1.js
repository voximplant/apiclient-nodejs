const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // Show the all items.
  client.AuthorizedIPs.getAuthorizedAccountIPs({})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};