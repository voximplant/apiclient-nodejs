const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // undefined
  client.AuthorizedIPs.checkAuthorizedAccountIP({authorizedIp: '92.255.220.0/24'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};