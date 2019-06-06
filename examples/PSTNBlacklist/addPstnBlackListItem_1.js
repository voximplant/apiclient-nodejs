const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // undefined
  client.PSTNBlacklist.addPstnBlackListItem({pstnBlacklistPhone: '123456789'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};