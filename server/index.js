require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

const connectDatabase = require("./database/connectDatabase");
const authRouter = require("./routes/auth");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

app.get("/hello", (req, res, next) => {
  res.send("Hello there");
  // next();
});

app.use("/users", authRouter);

app.use("/", express.static("static"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "static/index.html"));
});

const port = process.argv[2] || 3035;

connectDatabase().then(() => {
  app.listen(port, () => {
    console.log(
      `Server listening to http requests on http://localhost:${port}`
    );
  });
});


// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure
const accountSid = "ACfb18525c5c98a8ea54f8da57b170b4a0";
const authToken = "234352412ad88b6ee412d9c06fd3fb69";
const verifySid = "VA2898d7098064df8634fe5294e3b8164c";
const client = require("twilio")(accountSid, authToken);

client.verify.v2
  .services(verifySid)
  .verifications.create({ to: "+916370457871", channel: "sms" })
  .then((verification) => console.log(verification.status))
  .then(() => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    readline.question("Please enter the OTP:", (otpCode) => {
      client.verify.v2
        .services(verifySid)
        .verificationChecks.create({ to: "+916370457871", code: otpCode })
        .then((verification_check) => console.log(verification_check.status))
        .then(() => readline.close());
    });
  });