const jwt = require("jsonwebtoken");
const { User } = require("../database/User");
const config = require("../config/config");

async function auth(req, res, next) {
  const authorization = req.headers["authorization"];

  if (authorization) {
    const token = authorization.split(" ").pop();

    if (token) {
      try {
        jwt.verify(token, config.JWT_SECRET_KEY);

        let user = jwt.decode(token);

        user = await User.findById(user._id);

        user = user.toJSON();

        delete user.password;
        req.user = user;

        next();
      } catch (err) {
        return res.status(401).send({
          message: "Invalid token provided",
        });
      }
    } else {
      return res.status(401).send({
        message: "No auth token present",
      });
    }
  } else {
    return res.status(401).send({
      message: "User is not logged in",
    });
  }
}




module.exports = auth;
