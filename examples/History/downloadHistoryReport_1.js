const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Download the completed history report with id = 1
  client.History.downloadHistoryReport({historyReportId: '1'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};