const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Download the completed history report with id = 1.
  const ev = await client.History.downloadHistoryReport({ historyReportId: '1' });
  console.log(ev);
})().catch(console.error);
