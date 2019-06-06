import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Check the user's access to the link http://test.com/
client.History.checkAccessMediaLink({mediaUrl: 'http%3A%2F%2Ftest.com%2F'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});