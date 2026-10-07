const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Set attempts_left, start_at, and custom_data the task with id=1 in the call list with id=1.
  const ev = await client.CallLists.editCallListTask({
    listId: '1',
    taskId: '1',
    attemptsLeft: '2',
    startAt: new Date('2023-11-13 18:00:00 GMT'),
    customData: '{"phone":"555111222333","name":"Mr.Fate"}',
  });
  console.log(ev);
})().catch(console.error);
