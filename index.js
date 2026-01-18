const express = require("express");

const app = express();

app.use("/", express.static("public")).get("*", (req, res) => {
  return res.sendFile("/home/erkatoyu/apps/erkatoy/front/user/public/index.html");
});

app.listen(5173, () => {
  console.log("Simple static server is running on port 5173");
});
