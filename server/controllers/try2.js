const accountSid = "AC1b35c8c6414b5820b3d7520483234115";
const authToken = "e171bcdc087df52d9537c2bdbea28bba";
const verifySid = "VA627834a8bf1527f40a0abb9a66fa99c5";
const client = require("twilio")(accountSid, authToken);


function validateotp(phoneno,otp) {
       {  
      try {
      client.verify.v2
    .services(verifySid)
    .verificationChecks.create({ to:phoneno, code:otp })
    .then((verification_check) => {
      console.log(verification_check.status);
      if(verification_check.status==="approved"){
        console.log("verfied")
      }
      else{
       console.log("not verified");
      }
        })
    .catch((error) => {
      console.error('Error validating OTP:', error)
      console.log("error");
    });
          } catch (error) {
            console.log("error");
          }
        }
  }
  let otprecevied="969951"
  let phoneno="+919059840834"
validateotp(phoneno,otprecevied);
  