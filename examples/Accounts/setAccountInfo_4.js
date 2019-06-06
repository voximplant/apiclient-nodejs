const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Set the notification settings.
  client.Accounts.setAccountInfo({languageCode: 'en',
            location: 'GMT-8',
            minBalanceToNotify: '1.50',
            tariffChangingNotifications: 'true',
            newsNotifications: 'true'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};