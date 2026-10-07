const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Check if the phone number belongs to the account.
  const ev = await client.PhoneNumbers.isAccountPhoneNumber({ phoneNumber: '79991234567' });
  console.log(ev);
})().catch(console.error);
