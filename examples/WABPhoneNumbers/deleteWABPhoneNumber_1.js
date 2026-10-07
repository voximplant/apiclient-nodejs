const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Deletes a WhatsApp Business phone number.
  const ev = await client.WABPhoneNumbers.deleteWABPhoneNumber({ wabPhoneNumber: '12126367890' });
  console.log(ev);
})().catch(console.error);
