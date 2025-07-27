const express = require("express");
const router = express.Router();
const auth = require("./auth");
const profile = require("./profile");
const registration = require("./registration");

router.use("/auth", auth);
router.use("/profile", profile);
router.use("/registration", registration);

module.exports = router;
