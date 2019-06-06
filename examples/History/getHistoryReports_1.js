import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Get all the reports.
client.History.getHistoryReports({historyType: 'all'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});