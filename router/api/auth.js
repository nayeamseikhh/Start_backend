const express = require("express");
const router = express.Router();

router.use("/", (req, res) => {
  res.send("this is AUTH page");
});

module.exports = router;
