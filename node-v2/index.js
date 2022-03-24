const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hey this is the second api and the base url!");
});

app.get("/base", (req, res) => {
  res.send("This is the second api, endpoint without any parameter");
});

app.get("/base/:id", (req, res) => {
  res.send(
    `This is the second api, endpoint with param, and the passed param is ${req.params.id}`
  );
});

app.listen(8080, () => {
  console.log("Just how many of these apis I need to create");
});
