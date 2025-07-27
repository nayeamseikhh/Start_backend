const express = require("express");
const router = express.Router();

router.use("/", (req, res) => {
  res.send("this is PROFILE api");
});

module.exports = router;
