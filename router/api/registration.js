const express = require("express");
const {
  registration,
} = require("../../controller/registration/registrationController");

const router = express.Router();

router.use("/", registration);

module.exports = router;
