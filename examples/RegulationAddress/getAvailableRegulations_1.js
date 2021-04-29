const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Search available regulation address.
  client.RegulationAddress.getAvailableRegulations({countryCode: 'DE',
            phoneCategoryName: 'GEOGRAPHIC',
            phoneRegionCode: '643'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};