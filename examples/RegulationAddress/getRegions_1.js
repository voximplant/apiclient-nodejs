import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Get regions with city AACHEN.
client.RegulationAddress.getRegions({countryCode: 'DE',
            phoneCategoryName: 'GEOGRAPHIC',
            cityName: 'AACHEN'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});