const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // undefined
  client.Contacts.getContactAddresses({})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};