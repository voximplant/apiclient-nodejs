const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Adds a new WhatsApp Business phone number.
  const ev = await client.WABPhoneNumbers.addWABPhoneNumber({
    wabPhoneNumber: '12126367890',
    voicePassword: 'abc',
  });
  console.log(ev);
})().catch(console.error);
