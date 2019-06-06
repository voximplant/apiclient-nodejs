import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Get Germany
client.RegulationAddress.getCountries({countryCode: 'DE'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});