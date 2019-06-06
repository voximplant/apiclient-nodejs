import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// undefined
client.Accounts.getAccountDocuments({withDetails: 'true'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});