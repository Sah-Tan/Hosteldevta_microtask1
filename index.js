//Microtask1
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = process.env.PORT || 5000;
const file = require("./model.json");
app.get("/", (req, res) => {
  res.send("This is a microservice created by me for microtask 1");
});
app.get("/data", (req, res) => {
    res.status(200).json({ file });
});
app.listen(port, () => {
  console.log("server started");
});

module.exports = app;
