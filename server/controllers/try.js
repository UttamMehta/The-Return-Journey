const accountSid = "AC1b35c8c6414b5820b3d7520483234115";
const authToken = "e171bcdc087df52d9537c2bdbea28bba";
const verifySid = "VA627834a8bf1527f40a0abb9a66fa99c5";
const client = require("twilio")(accountSid, authToken);

function sendRandomOTP(phoneno) {
    try {
      client.verify
      .v2.services(verifySid)
      .verifications.create({ to: phoneno, channel: 'sms' })
      .then((verification) => {
        console.log(verification.sid);
        // we can also store the OTP in your database or session for verification later
      })
      .catch((error) => {
        console.log('Error sending OTP:18', error);
      });
    
    } catch (error) {
      console.log("Error in 24 on auth ");
    }
  }

  let ph="+919059840834";
  sendRandomOTP(ph);