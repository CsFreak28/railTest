const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.status(200);
  res.send("connected well");
});
app.listen(5000, () => {
  console.log("connected well");
});
