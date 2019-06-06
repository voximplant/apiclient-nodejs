import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Search regulation address with ID = 1
client.RegulationAddress.getRegulationsAddress({regulationAddressId: '1'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});