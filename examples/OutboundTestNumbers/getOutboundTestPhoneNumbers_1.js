const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get the phone number info.
  const ev = await client.OutboundTestNumbers.getOutboundTestPhoneNumbers({});
  console.log(ev);
})().catch(console.error);
