
//To compile:
//browserify twilio.js -o twilio_compiled.js
sendTextMessage = function (receiver, message) {
    var accountSid = 'AC293547006a54bbfecf9e78ef2a9a4021'; // Your Account SID from www.twilio.com/console
    var authToken = '3eb50e5792f384d2933d2dd7bb1fc47a';   // Your Auth Token from www.twilio.com/console

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