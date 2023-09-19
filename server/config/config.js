const config = {
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  DB_CONNECTION_URL: process.env.DB_CONNECTION_URL,
  TWILIO_ACCOUNT_SID:process.env. TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN:process.env.TWILIO_AUTH_TOKEN,
  PHONE_NO:process.env.PHONE_NO,
};

module.exports = config;
