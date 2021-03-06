const express = require("express");
const app = express();

app.use(express.static("public"));

app.listen(3000, () => {});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
app.get("/prueba", (req, res) => {
  res.sendFile(__dirname + "/views/prueba.html");
});

app.post("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/views/login.html");
});

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/views/register.html");
});
