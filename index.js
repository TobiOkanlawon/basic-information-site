const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/routes/", "index.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname + "/routes" + `${req.url}.html`));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname + "/routes" + `${req.url}.html`));
});

app.use(function (req, res, next) {
  return res.status(404).sendFile(path.join(__dirname + "/routes/404.html"));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
