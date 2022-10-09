const fs = require("fs");


// Read employees json data file
const readEmployees = () => {
  const employeeFile = fs.readFileSync("./data/employees.json");
  const employeeData = JSON.parse(employeeFile);
  return employeeData;
};



module.exports = {readEmployees};