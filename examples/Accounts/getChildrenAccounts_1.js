import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Get the all children.
client.Accounts.getChildrenAccounts({})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});