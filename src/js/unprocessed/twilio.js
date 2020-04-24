
//You need to compile this file using:
//browserify twilio.js -o twilio_compiled.js
sendTextMessage = function (receiver, message) {
    var accountSid = ''; // Your Account SID from www.twilio.com/console
    var authToken = '';   // Your Auth Token from www.twilio.com/console

    var twilio = require('twilio');
    var client = new twilio(accountSid, authToken);
    var twilioNb = '+14387964043';

    client.messages.create({
        body: message,
        to: receiver,  // Text this number
        from: twilioNb // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));
}