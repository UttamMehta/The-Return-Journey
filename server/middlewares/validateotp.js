const jwt = require("jsonwebtoken");
const { User } = require("../database/User");
const config = require("../config/config");
const accountSid = "ACfb18525c5c98a8ea54f8da57b170b4a0";
const authToken = "234352412ad88b6ee412d9c06fd3fb69";
const verifySid = "VA2898d7098064df8634fe5294e3b8164c";
const client = require("twilio")(accountSid, authToken);


async function validateotp(req, res, next) {
  const {otp,phoneno} = req.body;
  phoneno="+91"+phoneno;

  if (otp.length===6) {
     {   
    try {
    client.verify.v2
  .services(verifySid)
  .verificationChecks.create({ to:phoneno, code:otp })
  .then((verification_check) => {
    console.log(verification_check.status);
    next();
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
