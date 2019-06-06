import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Get the particular child.
client.Accounts.getChildrenAccounts({childAccountEmail: 'mychild%40gmail.com'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});