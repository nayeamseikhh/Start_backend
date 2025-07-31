const express = require("express");
const router = express.Router();
const auth = require("./auth");
const profile = require("./profile");
const {
  registration,
} = require("../../controller/registration/registrationController");

router.use("/auth", auth);
// router.use("/profile", profile);
// router.use("/register", registration);

module.exports = router;
