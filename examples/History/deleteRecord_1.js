import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Try remove link with record_id is 1.
client.History.deleteRecord({recordId: '1'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});