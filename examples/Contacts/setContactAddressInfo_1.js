const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // undefined
  client.Contacts.setContactAddressInfo({contactId: 'all',
            notificationGroup: 'all'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};