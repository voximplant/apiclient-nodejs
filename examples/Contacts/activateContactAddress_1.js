const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // undefined
  client.Contacts.activateContactAddress({contactId: '12',
            verificationCode: '12345abcde'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};