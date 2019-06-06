import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Download the completed history report with id = 1
client.History.downloadHistoryReport({historyReportId: '1'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});