const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // undefined
  client.Contacts.addContactAddress({contactType: 'email',
            contactData: 'alex@mail.ru'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};