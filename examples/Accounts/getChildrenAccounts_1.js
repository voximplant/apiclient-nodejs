const VoximplantApiClient = require('@voximplant/apiclient-nodejs').default;
const client = new VoximplantApiClient();
client.onReady = function () {
  // Get the specified children.
  client.Accounts.getChildrenAccounts({ childAccountId: '414877;464478' })
    .then((ev) => console.log(ev))
    .catch((err) => console.error(err));
};
