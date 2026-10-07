const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get messages with 1234, 1235, 1236 IDs, sent starting from March 1, 2019.
  const ev = await client.SMS.a2PGetSmsHistory({
    messageId: '1234;1235;1236',
    fromDate: new Date('2019-03-01 00:00:00 GMT'),
  });
  console.log(ev);
})().catch(console.error);
