import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Get the record storage with name = ru1.
client.RecordStorages.getRecordStorages({recordStorageName: 'ru1'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});