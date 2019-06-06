const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // undefined
  client.Accounts.sendAccountNotification({title: 'warn',
            msg: 'Alert',
            callbackType: 'js_fail'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};