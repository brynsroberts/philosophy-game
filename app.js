const express = require("express");
const path = require("path");
const microservice = require("./routes/microservice");

const app = express();
app.set("etag", false);
app.use((req, res, next) => {
  res.set("Cache-Control", "no-store");
  next();
});
app.use("/", microservice);
app.use(express.static(path.join(__dirname, ".//build")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./build/index.html"));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
