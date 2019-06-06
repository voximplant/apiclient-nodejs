import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Delete the 92.255.220.0/24 network from all the lists.
client.AuthorizedIPs.delAuthorizedAccountIP({authorizedIp: '92.255.220.0%2F24'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});