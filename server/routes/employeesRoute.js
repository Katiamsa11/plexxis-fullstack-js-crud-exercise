const express = require("express");
const db = require("../data/db-config");
const router = express.Router();

//Created get request to display all employees
router.get("/", async (req, res) => {
  try {
    const employees = await db.find();
    return res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ error: "try again" });
  }
});

//Created get request to display employees by id
router.get("/employee/:id", async (req, res) => {
  try {
    const employees = await db.findById(req.params.id);
    employees
      ? res.status(200).json(employees)
      : res.status(404).json({ error: "the employee does not exist" });
  } catch (error) {
    res.status(500).json({ error: "not found" });
  }
});

//Created a post request to create a new employee
router.post("/", async (req, res) => {
  try {
    const employees = await db.insert(req.body);
    employees
      ? res.status(201).json(employees)
      : res.status(400).json({
          error:
            "please fill out all required fields before posting a new employee",
        });
  } catch (error) {
    res.status(500).json({
      error: "there was an error while saving the employee to the database.",
    });
  }
});

//Created a put request to update a single employee
router.put("/employee/:id", async (req, res) => {
  try {
    const employees = await db.update(req.params.id, req.body);
    employees
      ? res.status(200).json(employees)
      : res.status(404).json({
          message: "the employee with the specified ID does not exist.",
        });
  } catch (error) {
    res.status(500).json({
      error: "the employee data could not be modified.",
    });
  }
});

//Created a delete request to delete a single employee
router.delete("/employee/:id", async (req, res) => {
  try {
    const employees = await db.remove(req.params.id);
    employees > 0
      ? res.status(201).json(employees)
      : res.status(404).json({
          message: "the employee with the specified ID does not exist.",
        });
  } catch (error) {
    res.status(500).json({
      error: "the employee data could not be delete.",
    });
  }
});

module.exports = router;
