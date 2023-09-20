const { User } = require("../database/User");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const axios = require("axios");
const brcypt = require("bcryptjs");

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
    let { phoneno,ipaddress,name,email,password } = req.body;

    if (!phoneno || !ipaddress||!name||!email||!password) {
      return res.status(400).send({
        error: "Incomplete data",
      });
    }

    let userphone = await User.findOne({phoneno});
    if(userphone)
    {
      return res.status(400).send({
        error: "User with phone no already exists",
      });
    }

    let useremail=await User.findOne({email});

    if (user) {
      return res.status(400).send({
        error: "User with email already exists",
      });
    }

    password = brcypt.hashSync(password);

    user = await User.create({
      name,
      email,
      password,
      phoneno,
      ipaddress,
    });

    return res.send({
      message: "Registration successful",
    });
  } catch (err) {
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





module.exports = {
  register,
  login,
  getAllUser,
};
