import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Try to commit the credit card authorization.
client.TheCreditCards.resume3DSecureCardAuth({PaRes: 'VmFsaWRUcmFuc2FjdGlvblZhbGlkVHJhbnNhY3Rpb25WYWxpZFRyYW5zYWN0aW9uVmFsaWRUcmFuc2FjdGlvbn5%2Bfn5%2Bfn5%2Bfn5%2Bfn5%2Bfn4%3D',
            MD: 'MTg5NzE1NDE4MTg5NzE1NDE4MTg5NzE1NDE4MTg5NzE1NDE4MTg5NzE1NDE4',
            private3ds: '{"pre"%3Atrue%2C"pid"%3A33}%3B7c7c131b08a5413769c600a54101f175'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});