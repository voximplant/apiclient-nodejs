import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Disable the child account.
client.Accounts.setChildAccountInfo({childAccountId: '1321',
            active: 'false'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});