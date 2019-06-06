const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // undefined
  client.PSTNBlacklist.setPstnBlackListItem({pstnBlacklistPhone: '123456789',
            pstnBlacklistId: '1'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};