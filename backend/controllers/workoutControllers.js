const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

//get All workouts
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });

  res.status(200).json(workouts);
};

//get single workout
const getWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not valid mongoose Id" });
  }

  const workout = await Workout.findById(id);
  if (!workout) {
    return res.status(400).json({ error: "No such workout" });
  }
  res.status(200).json(workout);
};

//create new workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;
  //add document to db
  try {
    const workout = await Workout.create({ title, load, reps });
    console.log("Workout ID:\n", workout.id);
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not valid mongoose Id -delete" });
  }

  const workout = await Workout.findOneAndDelete({_id:id})
  if(!workout){
    console.log('\nDelete Failure\n')
      return res.status(404).json({error:'Delete not found'})
    }
    console.log(`You have deleted:\n`,workout)
res.status(200).json(workout)

};

// update workout
const updateWorkout = async (req,res) =>{
    const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not valid mongoose Id - update" });
  }

const workout = await Workout.findOneAndUpdate({_id:id},{...req.body})
if(!workout){
    console.log('\nUpdate Failure\n')
      return res.status(404).json({error:'Update not found'})
    }
    console.log(`You have updated: `,workout.id)
res.status(200).json(workout)

}
module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout
};
