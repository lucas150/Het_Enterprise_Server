//require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const router = require("./routes/router.js");


// Retrieve port from .env or use default
const port = 8006;

// Middleware
app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port, () => {
  console.log(`Server started at port no: ${port}`);
});
