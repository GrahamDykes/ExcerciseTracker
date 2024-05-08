const express = require("express");
const Workout = require("../models/workoutModel");
const router = express.Router();
const {createWorkout, getWorkouts, getWorkout } = require("../controllers/workoutControllers")

//get ALL workouts
router.get("/", getWorkouts);

//get a SINGLE workout
router.get("/:id", getWorkout);

//POST a new workout
router.post("/", createWorkout);

//DELETE a workout
router.delete("/:id", (req, res) => {
  res.json({ msg: "delete a workout" });
});

//UPDATE a workout
router.patch("/:id", (req, res) => {
  res.json({ msg: "update a workout" });
});

module.exports = router;
