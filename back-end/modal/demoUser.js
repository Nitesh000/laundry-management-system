const UserModal = require("./user.modal");
const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.createAdmin = async () => {
  const adminPassword = await bcrypt.hash("admin123", saltRounds);
  const Admin = await new UserModal({
    name: "Admin",
    email: "admin@admin.com",
    phone: "0000000000",
    address: "Admin Home",
    password: adminPassword,
    isAdmin: true,
    status: "Completed"
  });

  await Admin.save();
};
