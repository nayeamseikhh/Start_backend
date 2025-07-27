const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const router = require("./router");
const app = express();
app.use(cors());
app.use(router);

app.listen(process.env.PORT, () => {
  console.log(
    `Example app listening on port ${process.env.PORT} this is my port addserr`
  );
});
