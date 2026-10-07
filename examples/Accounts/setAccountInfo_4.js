const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Set the notification settings.
  const ev = await client.Accounts.setAccountInfo({
    languageCode: 'en',
    location: 'GMT-8',
    minBalanceToNotify: '1.50',
    tariffChangingNotifications: 'true',
    newsNotifications: 'true',
  });
  console.log(ev);
})().catch(console.error);
