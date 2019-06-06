const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Check the user's access to the link http://test.com/
  client.History.checkAccessMediaLink({mediaUrl: 'http://test.com/'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};