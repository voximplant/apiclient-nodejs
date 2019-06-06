import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Add the 92.255.220.0/24 network to the white list.
client.AuthorizedIPs.addAuthorizedAccountIP({authorizedIp: '92.255.220.0%2F24'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});