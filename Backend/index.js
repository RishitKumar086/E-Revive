const express = require("express");
const app = express();

app.listen(4000, () => {
  console.log("Listening on port 3000");
});

app.get("/", (req, res) => {
  res.send("hello");
});
