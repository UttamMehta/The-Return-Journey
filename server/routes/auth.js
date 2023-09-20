const express = require("express");
const {
  register,
  login,
  sendRandomOTP,
} = require("../controllers/auth");
// const authMiddleware = require("../middlewares/auth");
const validateotp = require("../middlewares/validateotp");
const checkipaddress = require("../middlewares/checkipaddress");

const authRouter = express.Router();

authRouter.post("/register", validateotp,register);
authRouter.post("/login", login);
authRouter.post("/otp",checkipaddress,sendRandomOTP);


module.exports = authRouter;
