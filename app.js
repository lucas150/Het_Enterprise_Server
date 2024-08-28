require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router/router.js");
const cors = require("cors");

// Retrieve port from .env or use default
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(router);
app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.listen(port, () => {
  console.log(`Server started at port no: ${port}`);
});
