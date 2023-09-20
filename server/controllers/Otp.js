const { Post } = require("../database/Post");
const { all } = require("../routes/auth");
const config = require("../config/config");
const accountSid = "ACfb18525c5c98a8ea54f8da57b170b4a0";
const authToken = "234352412ad88b6ee412d9c06fd3fb69";
const verifySid = "VA2898d7098064df8634fe5294e3b8164c";
const client = require("twilio")(accountSid, authToken);

async function sendRandomOTP(req,res) {

  try {
    let {phoneno}=req.body;

    client.verify
    .v2.services(verifySid)
    .verifications.create({ to: phoneno, channel: 'sms', })
    .then((verification) => {
      console.log(verification);
      // we can also store the OTP in your database or session for verification later
    })
    .catch((error) => {
      console.log('Error sending OTP:', error);
    });
    
  } catch (error) {
    console.log("Error in 26 on otp");
    return res.status(400).send({error:"Not able to send otp try later"});
  }
  
}




// module.exports = {
//   createPost
// };
