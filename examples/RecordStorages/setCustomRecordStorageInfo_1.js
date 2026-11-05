const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Modify the custom record storage.
  const ev = await client.RecordStorages.setCustomRecordStorageInfo({
    host: 'example.com',
    accessKeyId: 'AKIAIOSFODNN7EXAMPLE',
    secretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',
    bucket: 'my-custom-voximplant-bucket',
    customRecordStorageId: '123',
  });
  console.log(ev);
})().catch(console.error);
