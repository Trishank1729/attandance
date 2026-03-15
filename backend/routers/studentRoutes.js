const express = require("express");
const Student = require("../models/Student");

const router = express.Router();

router.post("/add", async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.send(student);
});

router.get("/", async (req, res) => {
  const students = await Student.find();
  res.send(students);
});

module.exports = router;