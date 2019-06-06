import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// undefined
client.Contacts.addContactAddress({contactType: 'email',
            contactData: 'alex%40mail.ru'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});