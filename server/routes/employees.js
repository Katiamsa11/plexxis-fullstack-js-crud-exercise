const express = require("express");
const router = express.Router();
const fs = require("fs");
const utils = require("../utils/utils.js");
const crypto = require("crypto");

//created a get request to obtain all employees
router.get("/", (_req, res) => {
  // Read the file
  const employees = utils.readEmployees();

  if (employees.length === 0) {
    return res.status(500).json({ error: "internal server error!" });
  }

  res.status(200).json(employees);
});

//created a post request to create new employee
router.post("/", (req, res) => {
  const { name, code, profession, color, city, branch, assigned } = req.body;

  if (
    !name ||
    !code ||
    !profession ||
    !color ||
    !city ||
    !branch ||
    !assigned
  ) {
    return res
      .status(400)
      .json({
        error:
          "please input name, code, profession, color, city, branch and if its assigned",
      });
  }
  // create a new employee
  const newEmployee = {
    id: crypto.randomUUID(),
    name: req.body.name,
    code: req.body.code,
    profession: req.body.profession,
    color: req.body.color,
    city: req.body.city,
    branch: req.body.branch,
    assigned: req.body.assigned,
    timestamp: Date.now(),
  };

  // Read the file
  const employees = utils.readEmployees();
  employees.push(newEmployee);
  fs.writeFileSync("./data/employees.json", JSON.stringify(employees));

  res.status(201).json(newEmployee);
});

//created a delete request to delete an individual employee based on the id
router.delete("/employee/:employeeId", (req, res) => {
  const employees = utils.readEmployees();
  const idToDelete = req.params.employeeId;
  const requestedEmployee = employees.find(
    (employee) => employee.id === idToDelete
  );

  if (!requestedEmployee) {
    return res.status(500).send();
  }
  const employeeToDelete = employees.indexOf(requestedEmployee);
  employees.splice(employeeToDelete, 1);
  fs.writeFileSync("./data/employees.json", JSON.stringify(employees));

  res.status(204).send();
});

module.exports = router;
