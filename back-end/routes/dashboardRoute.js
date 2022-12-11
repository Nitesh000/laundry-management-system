const router = require("express").Router();
const UserModal = require("../modal/user.modal");
const { checkUser } = require("../middleware/authMiddleware");

router.get("/:userId", checkUser, async (req, res, next) => {
  const user = await UserModal.findById(req.params.userId);
  if (user.isAdmin) {
    const users = await UserModal.find(
      {},
      { name: 1, email: 1, phone: 1, address: 1, status: 1 }
    );
    return res.json({ users: users, isAdmin: true, name: "Admin" });
  } else {
    return res.json({
      isAdmin: user.isAdmin,
      status: user.status,
      name: user.name
    });
  }
});

router.put("/:userId", checkUser, async (req, res, next) => {
  const status = req.body.status;
  const result = await UserModal.findByIdAndUpdate(req.body.id, {
    status: status
  });
  res.json({ result: result, message: "status updated" });
});

module.exports = router;
