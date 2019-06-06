const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // undefined
  client.SIPWhiteList.setSipWhiteListItem({sipWhitelistId: '1',
            sipWhitelistNetwork: '192.168.1.5/16'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};