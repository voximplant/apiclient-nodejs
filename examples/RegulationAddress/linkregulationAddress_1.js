import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Link regulation address to phone number
client.RegulationAddress.linkregulationAddress({regulationAddressId: '1',
            phoneId: '1'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});