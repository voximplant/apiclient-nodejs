const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // undefined
  client.Contacts.delContactAddress({contactId: '12;15'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};