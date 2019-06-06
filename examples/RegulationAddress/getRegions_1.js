const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Get regions with city AACHEN.
  client.RegulationAddress.getRegions({countryCode: 'DE',
            phoneCategoryName: 'GEOGRAPHIC',
            cityName: 'AACHEN'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};