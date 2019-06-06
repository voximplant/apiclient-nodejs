const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Try to commit the credit card authorization.
  client.TheCreditCards.resume3DSecureCardAuth({PaRes: 'VmFsaWRUcmFuc2FjdGlvblZhbGlkVHJhbnNhY3Rpb25WYWxpZFRyYW5zYWN0aW9uVmFsaWRUcmFuc2FjdGlvbn5+fn5+fn5+fn5+fn5+fn4=',
            MD: 'MTg5NzE1NDE4MTg5NzE1NDE4MTg5NzE1NDE4MTg5NzE1NDE4MTg5NzE1NDE4',
            private3ds: '{"pre":true,"pid":33};7c7c131b08a5413769c600a54101f175'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};