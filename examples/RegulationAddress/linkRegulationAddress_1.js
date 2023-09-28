const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Link the regulation address to a phone number.
  client.RegulationAddress.linkRegulationAddress({regulationAddressId: '1',
            phoneId: '1'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};