const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get the three log items from the 2018-02-01 00:00:00 to the 2018-03-01 00:00:00 and filter.
  const ev = await client.History.getAuditLog({
    fromDate: new Date('2018-02-01 00:00:00 GMT'),
    toDate: new Date('2018-03-01 00:00:00 GMT'),
    filteredCmd: 'BindSkill;AddSkill;DelSkill',
    advancedFilters: '152',
    count: '3',
  });
  console.log(ev);
})().catch(console.error);
