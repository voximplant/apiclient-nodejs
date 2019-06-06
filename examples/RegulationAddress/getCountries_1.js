const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // Get Germany
  client.RegulationAddress.getCountries({countryCode: 'DE'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};