const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    phone: Number,
    address: String,
    password: String,
    isAdmin: {
      type: Boolean,
      default: false
    },
    status: {
      type: String,
      default: "Pending"
    }
  },
  {
    timestamps: true
  }
);

module.exports = UserModal = mongoose.model("User", userSchema);
