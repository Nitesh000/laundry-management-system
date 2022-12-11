const router = require("express").Router();
const UserModal = require("../modal/user.modal");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "ThisIsASecretKey";
// post
router.post("/", async (req, res, next) => {
  const { email, password } = req.body;
  const result = await UserModal.findOne({ email: email });
  if (!result) return res.json({ message: "no user found!" });
  const user = result;
  const token = jwt.sign({ id: user._id }, SECRET_KEY, {
    expiresIn: "10h"
  });
  const hashedPassword = user.password;
  const isPasswordValid = bcrypt.compareSync(password, hashedPassword);
  if (!isPasswordValid)
    return res.status(400).json({ message: "wrong password" });
  res.cookie("token", token);
  res.json({ result: result, token: token });
});

module.exports = router;
