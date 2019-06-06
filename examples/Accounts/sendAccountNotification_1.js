import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// undefined
client.Accounts.sendAccountNotification({title: 'warn',
            msg: 'Alert',
            callbackType: 'js_fail'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});