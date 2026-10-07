const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get the brief call session history from the 2020-02-25 00:00:00 UTC to the 2020-02-26 00:00:00 UTC.
  const ev = await client.History.getBriefCallHistory({
    fromDate: new Date('2020-02-25 00:00:00 GMT'),
    toDate: new Date('2020-02-26 00:00:00 GMT'),
    timezone: 'Etc/GMT',
    output: 'cvs',
  });
  console.log(ev);
})().catch(console.error);
