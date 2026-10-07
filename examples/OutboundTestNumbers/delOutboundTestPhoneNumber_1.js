const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Delete the phone number.
  const ev = await client.OutboundTestNumbers.delOutboundTestPhoneNumber({});
  console.log(ev);
})().catch(console.error);
