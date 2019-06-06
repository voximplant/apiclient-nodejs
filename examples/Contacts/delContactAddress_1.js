import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// undefined
client.Contacts.delContactAddress({contactId: '12%3B15'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});