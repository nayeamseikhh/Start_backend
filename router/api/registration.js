const express = require("express");
const router = express.Router();

router.use("/", (req, res) => {
  res.send("this is REGISTRATION api");
});

module.exports = router;
