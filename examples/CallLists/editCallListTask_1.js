const VoximplantApiClient = require('@voximplant/apiclient-nodejs').default;
const client = new VoximplantApiClient();
client.onReady = function () {
  // Set attempts_left, start_at, and custom_data the task with id=1 in the call list with id=1.
  client.CallLists.editCallListTask({
    listId: '1',
    taskId: '1',
    attemptsLeft: '2',
    startAt: new Date('2023-11-13 18:00:00 GMT'),
    customData: '{"phone":"555111222333","name":"Mr.Fate"}',
  })
    .then((ev) => console.log(ev))
    .catch((err) => console.error(err));
};
