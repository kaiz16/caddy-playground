const express = require("express");
const app = express();

const PORT = 5000;
app.get("/", (req, res) => {
  res.send("Blogs");
});

app.get("/:id", (req, res) => {
  res.send("A single blog");
});

app.listen(PORT, () => {
  console.log("🚀 Listening on " + PORT);
});
