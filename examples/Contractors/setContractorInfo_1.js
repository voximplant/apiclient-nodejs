const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // undefined
  client.Contractors.setContractorInfo({inn: '7017153576',
            kpp: '701701001',
            companyPhone: '74990001122',
            companyName: 'ООО Ромашка',
            companyAddress: '353444, край Краснодарский, город Анапа, проспект Пионерский, 1'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};