import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Get the three log items from the 2018-02-01 00:00:00 to the 2018-03-01 00:00:00 and filter.
client.History.getAuditLog({fromDate: '2018-02-01 00%3A00%3A00',
            toDate: '2018-03-01 00%3A00%3A00',
            filteredCmd: 'BindSkill%3BAddSkill%3BDelSkill',
            advancedFilters: '152',
            count: '3'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});