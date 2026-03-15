const express = require("express");
const Attendance = require("../models/Attendance");

const router = express.Router();

router.post("/mark", async (req, res) => {
  const attendance = new Attendance(req.body);
  await attendance.save();
  res.send(attendance);
});

router.get("/", async (req, res) => {
  const data = await Attendance.find();
  res.send(data);
});

module.exports = router;