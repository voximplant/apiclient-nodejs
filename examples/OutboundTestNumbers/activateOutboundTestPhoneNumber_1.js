const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Activate the personal phone number by the verification code.
  const ev = await client.OutboundTestNumbers.activateOutboundTestPhoneNumber({
    verificationCode: '12345',
  });
  console.log(ev);
})().catch(console.error);
