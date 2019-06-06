import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Change the account's password.
client.Accounts.setAccountInfo({newAccountPassword: '7654321'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});