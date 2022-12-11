const UserModal = require("../modal/user.modal");
const SECRET_KEY = "ThisIsASecretKey";
const jwt = require("jsonwebtoken");

module.exports.checkUser = async (req, res, next) => {
  const token = req.cookies;
  if (token) {
    jwt.verify(token.token, SECRET_KEY, async (err, decodedToken) => {
      if (err) {
        return res.json({ status: false });
      } else {
        const user = await UserModal.findById(decodedToken.id);
        if (user) {
          next();
        } else return res.json({ status: false });
      }
    });
  } else {
    return res.json({ status: false });
  }
};
