import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// undefined
client.SIPWhiteList.setSipWhiteListItem({sipWhitelistId: '1',
            sipWhitelistNetwork: '192.168.1.5%2F16'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});