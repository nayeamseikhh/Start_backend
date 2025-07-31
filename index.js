const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const router = require("./router");

app.use(cors());
app.use(express.json());

app.use(router);

// app.post("/api/data", registration);

app.listen(process.env.PORT, () => {
  console.log(
    `Example app listening on port ${process.env.PORT} this is my port addserr`
  );
});
