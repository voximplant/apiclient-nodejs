const VoximplantApiClient = require('@voximplant/apiclient-nodejs').default;
const client = new VoximplantApiClient();
client.onReady = function () {
  // Add a new user.
  client.Users.addUser({
    userName: 'GordonFreeman',
    userDisplayName: 'GordonFreeman',
    userPassword: '1234567',
    applicationId: '1',
  })
    .then((ev) => console.log(ev))
    .catch((err) => console.error(err));
};
