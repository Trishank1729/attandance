const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const studentRoutes = require("./routes/studentRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/attendance");

app.use("/students", studentRoutes);
app.use("/attendance", attendanceRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});