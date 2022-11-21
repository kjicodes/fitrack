const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  startDate: {
    type: String,
    required: true
  },
  time: String,
  type: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  comment: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Workout", workoutSchema);
