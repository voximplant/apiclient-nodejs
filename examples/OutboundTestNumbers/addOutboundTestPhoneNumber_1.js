const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Add a personal phone number.
  const ev = await client.OutboundTestNumbers.addOutboundTestPhoneNumber({
    phoneNumber: '12223334444',
  });
  console.log(ev);
})().catch(console.error);
