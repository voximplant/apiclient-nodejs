const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Search for zip codes in Germany.
  client.RegulationAddress.getZIPCodes({countryCode: 'DE',
            count: '1'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};