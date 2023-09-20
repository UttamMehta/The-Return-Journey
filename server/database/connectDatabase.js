const mongoose = require("mongoose");
const config = require("../config/config");
// const config = require("./config");
mongoose.set("strictQuery", false);

async function connectDatabase() {
  try {
    console.log(config);
    const result = await mongoose.connect(config.DB_CONNECTION_URL);
    return result;
  } catch (e) {
    return e;
  }
}

module.exports = connectDatabase;
