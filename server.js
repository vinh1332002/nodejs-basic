const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World! Vinh ");
});

app.get("/ab", (req, res) => {
    res.send("Cha hieu sao Vinh ");
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
