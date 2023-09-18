const mongoose = require("mongoose");
const config = require("../config/config");
mongoose.set("strictQuery", false);

async function connectDatabase() {
  const result = await mongoose.connect("mongodb://localhost:27017/userdata");

  return result;
}

module.exports = connectDatabase;
