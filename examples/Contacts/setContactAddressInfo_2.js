import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// undefined
client.Contacts.setContactAddressInfo({contactId: '12',
            newContactType: 'email',
            newContactData: 'aleks%40mail.ru',
            description: 'My mail'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});