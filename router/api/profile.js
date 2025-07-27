const express = require("express");
const { userInfo } = require("../../controller/profile/profileController");
const router = express.Router();

router.use("/", userInfo);

module.exports = router;
