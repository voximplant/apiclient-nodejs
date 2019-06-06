const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // undefined
  client.PSTNBlacklist.delPstnBlackListItem({pstnBlacklistId: '1'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};