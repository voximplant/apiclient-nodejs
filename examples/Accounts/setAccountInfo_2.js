import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Change the account's email.
client.Accounts.setAccountInfo({newAccountEmail: 'superman%40mail.ru'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});