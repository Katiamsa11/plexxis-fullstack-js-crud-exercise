const express = require("express");
const cors = require("cors");
const app = express();
const employees = require("./routes/employeesRoute");
let PORT = 8080;

// added middleware to allow any origin (front-end) to interact with API
app.use(cors());

app.use(express.json());

//linked the employees route
app.use("/employees", employees);

// basic home route
app.get("/", (_req, res) => {
  res.send("Welcome to Plexxis Employees API");
});

//listening on port 8080
app.listen(PORT, () => {
  console.log(`I'm here and I'm listening on port` + " " + PORT);
});
