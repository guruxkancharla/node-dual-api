const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hey this is the base endpoint!");
});

app.get("/end", (req, res) => {
  res.send("This is the endpoint without any parameter");
});

app.get("/end/:id", (req, res) => {
  res.send(
    `This is the endpoint with param, and the passed param is ${req.params.id}`
  );
});

app.listen(3000, () => {
  console.log("Just how many of these apis I need to create");
});
