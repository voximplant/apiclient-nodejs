const VoximplantApiClient = require('@voximplant/apiclient-nodejs').default;
const client = new VoximplantApiClient();
client.onReady = function () {
  // Get messages with 1234, 1235, 1236 IDs, sent starting from March 1, 2019.
  client.SMS.getSmsHistory({
    messageId: '1234;1235;1236',
    fromDate: new Date('2019-03-01 00:00:00 GMT'),
  })
    .then((ev) => console.log(ev))
    .catch((err) => console.error(err));
};
