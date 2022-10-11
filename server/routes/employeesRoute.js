const express = require("express");
const db = require("../data/db-config");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const employees = await db.find();
    return res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ error: "try again" });
  }
});

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

router.post("/", async (req, res) => {
  try {
    const employees = await db.insert(req.body);
    employees
      ? res.status(201).json(employees)
      : res.status(400).json({
          error:
            "please fill out all required fields before posting a new employe",
        });
  } catch (error) {
    res.status(500).json({
      error: "there was an error while saving the employee to the database.",
    });
  }
});

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
