const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get the verification code.
  const ev = await client.OutboundTestNumbers.verifyOutboundTestPhoneNumber({});
  console.log(ev);
})().catch(console.error);
