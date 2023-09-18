const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    phoneno: String,
    ipaddress: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("Userthereturnjournay", UserSchema); // collection - users

module.exports = {
  User,
};
