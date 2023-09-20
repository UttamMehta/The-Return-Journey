const jwt = require("jsonwebtoken");
const { User } = require("../database/User");
const config = require("../config/config");
const accountSid = config.TWILIO_ACCOUNT_SID;
const authToken =config.TWILIO_AUTH_TOKEN;
const verifySid = config.VERIFY_SID;
const client = require("twilio")(accountSid, authToken);


async function validateotp(req, res, next) {
  let {otp,phoneno}=req.body;
  phoneno="+91"+phoneno;

  if (otp.length===6) {
     {   
    try {
    client.verify.v2
  .services(verifySid)
  .verificationChecks.create({ to:phoneno, code:otp })
  .then((verification_check) => {
    console.log(verification_check.status);
    if(verification_check.status==="approved"){
      next();
    }
    else{
      return res.status(401).send({
        message: "Wrong otp",
      });
    }
      })
  .catch((error) => {
    console.error('Error validating OTP:', error);
    return res.status(401).send({
        message: "Not valid otp",
      });
  });
        } catch (error) {
            return res.status(401).send({
                message: "Not valid otp",
              });
        }
      }
  } else {
    return res.status(401).send({
      message: "Enter six digit otp",
    });
  }
}




module.exports = validateotp;
