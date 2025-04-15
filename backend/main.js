const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.redirect("http://localhost:5173");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
