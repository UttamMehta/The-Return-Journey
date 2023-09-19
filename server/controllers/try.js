const accountSid = "ACfb18525c5c98a8ea54f8da57b170b4a0";
const authToken = "234352412ad88b6ee412d9c06fd3fb69";
const verifySid = "VA2898d7098064df8634fe5294e3b8164c";
const client = require("twilio")(accountSid, authToken);



// client.verify.v2
//   .services(verifySid)
//   .verifications.create({ to: "+919437939830", channel: "sms" })
//   .then((verification) => console.log(verification.status))
//   .then(() => {
//     const readline = require("readline").createInterface({
//       input: process.stdin,
//       output: process.stdout,
//     });
//     readline.question("Please enter the OTP:", (otpCode) => {
//       client.verify.v2
//         .services(verifySid)
//         .verificationChecks.create({ to: "+919437939830", code: otpCode })
//         .then((verification_check) => console.log(verification_check.status))
//         .then(() => readline.close());
//     });
//   });


  function sendRandomOTP(phoneNumber) {
    client.verify
      .v2.services(verifySid)
      .verifications.create({ to: phoneNumber, channel: 'sms', })
      .then((verification) => {
        console.log(verification.sid);
        // You can also store the OTP in your database or session for verification later
      })
      .catch((error) => {
        console.error('Error sending OTP:', error);
      });
  }
// client.verify.v2
//   .services(verifySid)
//   .verifications.create({
//     channel: 'sms',
//     to:"+918338853833",
//    })
//   .then(message => console.log(message.sid))
//   .catch((error)=>{
// console.log("error on 52");
//   });
  
  // Example usage: Send a random OTP to the user's phone number
  const userPhoneNumber = '+919437939830'; // Replace with the user's phone number
  sendRandomOTP(userPhoneNumber);
  