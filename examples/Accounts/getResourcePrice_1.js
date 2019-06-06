import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// 
client.Accounts.getResourcePrice({})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});