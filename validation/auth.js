const jwt = require("jsonwebtoken");
require("dotenv").config();

function auth(req, res, next) {
  const token = req.header("x-auth-token");

  if (!token) return res.status(401).json({ msg: "Authorization denied" });

  try {
    const decoded = jwt.verify(token, process.env.SECRETORKEY);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ msg: "Token unvalid" });
  }
}

module.exports = auth;
