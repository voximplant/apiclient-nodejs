import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// undefined
client.AuthorizedIPs.checkAuthorizedAccountIP({authorizedIp: '92.255.220.0%2F24'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});