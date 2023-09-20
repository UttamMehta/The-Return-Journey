const express = require("express");
const {
  register,
  login,
  sendRandomOTP,
} = require("../controllers/auth");
// const authMiddleware = require("../middlewares/auth");
const validateotp = require("../middlewares/validateotp");

const authRouter = express.Router();

authRouter.post("/register", validateotp,register);
authRouter.post("/login", login);
authRouter.post("/otp",sendRandomOTP);


module.exports = authRouter;
