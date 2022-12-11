const router = require("express").Router();
const bcrypt = require("bcrypt");
const UserModal = require("../modal/user.modal");
const saltRounds = 10;

router.post("/", async (req, res) => {
  const { name, email, phone, address, password } = req.body;
  const existingUser = await UserModal.findOne({ email: email });
  if (existingUser) {
    console.log(existingUser);
    return res.json({ message: "user Already exist!" });
  }
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  let newUser = new UserModal({
    name,
    email,
    phone,
    address,
    password: hashedPassword
  });

  const response = await newUser.save();
  if (!response) return res.json({ message: "Failed to create a new user." });
  return res.json(response);
});

module.exports = router;
