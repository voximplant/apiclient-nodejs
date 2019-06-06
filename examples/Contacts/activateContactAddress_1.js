import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// undefined
client.Contacts.activateContactAddress({contactId: '12',
            verificationCode: '12345abcde'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});