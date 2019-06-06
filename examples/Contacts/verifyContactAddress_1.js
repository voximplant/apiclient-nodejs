const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // undefined
  client.Contacts.verifyContactAddress({contactId: '12'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};