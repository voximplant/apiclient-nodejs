import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Search zip codes in Germany
client.RegulationAddress.getZIPCodes({countryCode: 'DE',
            count: '1'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});