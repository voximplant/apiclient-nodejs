import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Get all record storages.
client.RecordStorages.getRecordStorages({})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});