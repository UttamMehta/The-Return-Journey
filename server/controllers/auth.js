const { User } = require("../database/User");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const axios = require("axios");
const brcypt = require("bcryptjs");
const accountSid = config.TWILIO_ACCOUNT_SID;
const authToken =config.TWILIO_AUTH_TOKEN;
const verifySid = config.VERIFY_SID;
const client = require("twilio")(accountSid, authToken);

function generateToken(user) {
  const { _id,phoneno,ipaddress} = user;

  return jwt.sign(
    {
      _id,
      phoneno,ipaddress,
    },
    config.JWT_SECRET_KEY
  );
}

async function getAllUser(req, res) {
  try {
    let b = await User.find();

    res.send({ data: { b } });
  } catch (err) {
    res.status(501).send({ message: err });
  }
}


async function register(req, res) {
  try {
    let { phoneno,name,email,password } = req.body;

    if (!phoneno||!name||!email||!password) {
      return res.status(400).send({
        error: "Incomplete data",
      });
    }
    console.log(phoneno);

    let userphone = await User.findOne({phoneno});
    if(userphone)
    {
      return res.status(400).send({
        error: "User with phone no already exists",
      });
    }
    
    let useremail=await User.findOne({email});

    if (useremail) {
      return res.status(400).send({
        error: "User with email already exists",
      });
    }

    password = brcypt.hashSync(password);
    console.log(phoneno,email,password,name);
    let userpost = await User.create({
    name,
    email,
    password,
    phoneno,
});
 
    return res.send({
      message: "Registration successful",
    });
  } catch (err) {
    console.log("err in 80");
    return res.status(500).send({
      error: "Something went wrong",
    });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    console.log(email);
    let user = await User.findOne({
      email,
    });

    if (!user) {
      return res.status(400).send({
        error: "User with email does not exist",
      });
    }

    if (!brcypt.compareSync(password, user.password)) {
      return res.status(400).send({
        error: "Wrong password",
      });
    }

    // Create JWT token
    const token = generateToken(user);
    const { _id, name, phoneno } = user;

    return res.send({
      message: "Login successful",
      data: {
        token,
        user: {
          _id,
          name,
          phoneno,
        },
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      error: "Something went wrong",
    });
  }
}


async function sendRandomOTP(req,res) {
  
  try {
   
     let {phoneno}=req.body;
     phoneno="+91"+phoneno;

    
    client.verify
    .v2.services(verifySid)
    .verifications.create({ to: phoneno, channel: 'sms' })
    .then((verification) => {
      console.log(verification.sid);
      return res.send({message:"Otp send successful"});
      // we can also store the OTP in your database or session for verification later
    })
    .catch((error) => {
      console.log('Error sending OTP:142', error);
      return res.status(401).send({error:"Error occured"});
 
    });
  
  } catch (error) {
    console.log("Error in 146 on auth ");
    return res.status(400).send({error:"Not able to send otp try later"});
  }
  
}


module.exports = {
  register,
  login,
  getAllUser,
  sendRandomOTP
};
