const Workout = require('../models/Workout');

module.exports = {
  index, 
  create,
  delete: deleteWorkout
};

function index(req, res) {
  Workout.find({}, function(err, workouts) {
    if (err) {
      res.status(500).json(err)
    }
    res.json(workouts).status(200)
  })
};

function create(req, res) {
  Workout.create(req.body, function(err, workout) {
    res.status(200).json('ok')
  })
};

function deleteWorkout(req, res) {
  Workout.findByIdAndRemove(req.params.id);
  res.status(200).json('ok')
};
