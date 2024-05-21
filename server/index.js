require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.APP_PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.info(`Server is running on http://localhost:${port}`);
});
