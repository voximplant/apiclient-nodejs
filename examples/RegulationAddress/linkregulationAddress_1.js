const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Link regulation address to phone number
  client.RegulationAddress.linkregulationAddress({regulationAddressId: '1',
            phoneId: '1'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};