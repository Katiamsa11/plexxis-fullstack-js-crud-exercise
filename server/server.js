const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const employees = require("./routes/employees.js");
let PORT = 8080;

// added middleware to allow any origin (front-end) to interact with API
app.use(cors());

app.use(express.json());

//linked the employees route
app.use("/employees", employees);

// basic home route
app.get("/", (_req, res) => {
  res.send("Welcome to Plex Employees API");
});

app.listen(PORT, () => {
  console.log(`I'm here and I'm listening on port`+ ' ' + PORT );
});