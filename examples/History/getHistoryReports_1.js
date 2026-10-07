const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get all the reports.
  const ev = await client.History.getHistoryReports({ historyType: 'all' });
  console.log(ev);
})().catch(console.error);
