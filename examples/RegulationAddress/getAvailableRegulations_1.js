import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Search available regulation address
client.RegulationAddress.getAvailableRegulations({countryCode: 'DE',
            phoneCategoryName: 'GEOGRAPHIC',
            phoneRegionCode: '643'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});