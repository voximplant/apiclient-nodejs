import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// undefined
client.Contractors.setContractorInfo({inn: '7017153576',
            kpp: '701701001',
            companyPhone: '74990001122',
            companyName: 'ООО Ромашка',
            companyAddress: '353444%2C край Краснодарский%2C город Анапа%2C проспект Пионерский%2C 1'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});