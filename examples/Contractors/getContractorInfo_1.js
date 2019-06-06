import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// undefined
client.Contractors.getContractorInfo({})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});