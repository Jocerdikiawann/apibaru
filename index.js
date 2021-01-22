const express = require("express");
const app = express();
let port = process.env.PORT || 3000;
const importData = require("./dataApi.json");

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get('/api', (req, res) => {
    res.send(importData);
});

app.listen(port, () => {
  console.log(`Server started on port http://localhost:${port}`);
});
