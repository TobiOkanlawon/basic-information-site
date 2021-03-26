const fs = require("fs");
const http = require("http");
const url = require("url");

let index;
let contact;
let about;
let errorPage;

fs.readFile("./routes/index.html", (err, data) => {
  if (!err) {
    index = data;
  } else {
    throw Error(err);
  }
});
fs.readFile("./routes/contact.html", (err, data) => {
  if (!err) {
    contact = data;
  }
});

fs.readFile("./routes/about.html", (err, data) => {
  if (!err) {
    about = data;
  }
});

fs.readFile("./routes/404.html", (err, data) => {
  if (!err) {
    errorPage = data;
  }
});

http
  .createServer((req, res) => {
    const queryPath = url.parse(req.url, true).pathname;
    console.log(queryPath);

    switch (queryPath) {
      case "/":
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(index);
        break;
      case "/about":
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(about);
        break;
      case "/contact":
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(contact);
        break;

      default:
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(errorPage);
        break;
    }
  })
  .listen(3000);
