const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Search regulation address with ID = 1.
  client.RegulationAddress.getRegulationsAddress({regulationAddressId: '1'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};