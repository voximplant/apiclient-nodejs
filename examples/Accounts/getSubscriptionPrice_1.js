const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // Get the all subscription template prices.
  client.Accounts.getSubscriptionPrice({})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};