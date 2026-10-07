const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get messages that had been sent to number 12345678222 starting from March 1, 2019. Number of resulting rows is limited to 2.
  const ev = await client.SMS.getSmsHistory({
    destinationNumber: '12345678222',
    fromDate: new Date('2019-03-01 00:00:00 GMT'),
  });
  console.log(ev);
})().catch(console.error);
