const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const { createAdmin } = require("./modal/demoUser");

mongoose.set("strictQuery", true);

mongoose.connect(
  "mongodb://localhost:27017/laundry-management-system",
  { serverSelectionTimeoutMS: 5000 },
  (err) => {
    if (err) {
      throw new Error("Mongodb didn't connect");
    } else {
      console.log("Mongodb connection successful!");
    }
  }
);

createAdmin();

const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/signup", require("./routes/signupRoute"));
app.use("/login", require("./routes/loginRoute"));
app.use("/dashboard/", require("./routes/dashboardRoute"));

app.listen(3030, () => {
  console.log("Server Started on port 3030!");
});
