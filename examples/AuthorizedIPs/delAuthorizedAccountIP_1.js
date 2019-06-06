const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Delete the 92.255.220.0/24 network from all the lists.
  client.AuthorizedIPs.delAuthorizedAccountIP({authorizedIp: '92.255.220.0/24'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};