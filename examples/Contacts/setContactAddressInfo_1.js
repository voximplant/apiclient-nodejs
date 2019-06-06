import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// undefined
client.Contacts.setContactAddressInfo({contactId: 'all',
            notificationGroup: 'all'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});