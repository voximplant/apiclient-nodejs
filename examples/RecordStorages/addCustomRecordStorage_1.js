const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Adds a custom record storage.
  const ev = await client.RecordStorages.addCustomRecordStorage({
    host: 'example.com',
    accessKeyId: 'AKIAIOSFODNN7EXAMPLE',
    secretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',
    bucket: 'my-custom-voximplant-bucket',
  });
  console.log(ev);
})().catch(console.error);
