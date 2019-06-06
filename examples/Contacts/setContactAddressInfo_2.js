const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // undefined
  client.Contacts.setContactAddressInfo({contactId: '12',
            newContactType: 'email',
            newContactData: 'aleks@mail.ru',
            description: 'My mail'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};