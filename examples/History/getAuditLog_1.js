const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Get the three log items from the 2018-02-01 00:00:00 to the 2018-03-01 00:00:00 and filter.
  client.History.getAuditLog({fromDate: new Date('2018-02-01 00:00:00 GMT'),
            toDate: new Date('2018-03-01 00:00:00 GMT'),
            filteredCmd: 'BindSkill;AddSkill;DelSkill',
            advancedFilters: '152',
            count: '3'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};