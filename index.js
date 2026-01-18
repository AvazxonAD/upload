const express = require("express");

const app = express();

app.use("/", express.static("public")).get("*", (req, res) => {
  return res.sendFile("/home/avaz/apps/gvardiya_front/public/index.html");
});

app.listen(5173, () => {
  console.log("Simple static server is running on port 5173");
});
