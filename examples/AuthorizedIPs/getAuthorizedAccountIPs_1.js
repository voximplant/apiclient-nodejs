import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Show the all items.
client.AuthorizedIPs.getAuthorizedAccountIPs({})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});