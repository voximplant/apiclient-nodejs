import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// undefined
client.PSTNBlacklist.addPstnBlackListItem({pstnBlacklistPhone: '123456789'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});