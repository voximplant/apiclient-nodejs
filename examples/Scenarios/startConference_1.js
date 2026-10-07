const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Start the conference from the account.
  const ev = await client.Scenarios.startConference({
    conferenceName: 'boss',
    ruleId: '1',
    scriptCustomData: 'mystr',
  });
  console.log(ev);
})().catch(console.error);
