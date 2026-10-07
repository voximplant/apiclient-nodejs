const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  //
  const ev = await client.WABPhoneNumbers.setWABPhoneNumberInfo({
    wabPhoneNumber: '12126367890',
    applicationId: '1234',
    ruleId: '5678',
  });
  console.log(ev);
})().catch(console.error);
