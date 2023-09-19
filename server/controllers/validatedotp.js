const accountSid = "ACfb18525c5c98a8ea54f8da57b170b4a0";
const authToken = "234352412ad88b6ee412d9c06fd3fb69";
const verifySid = "VA2898d7098064df8634fe5294e3b8164c";
const client = require("twilio")(accountSid, authToken);


const enteredOTP = "189542"; 

client.verify.v2
  .services(verifySid)
  .verificationChecks.create({ to: "+919437939830", code: enteredOTP })
  .then((verification_check) => {
    console.log(verification_check.status);
    // Check the verification_check.status to determine if the OTP is valid
  })
  .catch((error) => {
    console.error('Error validating OTP:', error);
  });