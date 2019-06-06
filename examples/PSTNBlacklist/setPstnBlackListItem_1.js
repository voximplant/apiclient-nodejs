import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// undefined
client.PSTNBlacklist.setPstnBlackListItem({pstnBlacklistPhone: '123456789',
            pstnBlacklistId: '1'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});