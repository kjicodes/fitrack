const express = require('express');
const router = express.Router();
const workoutCtrl = require('../../controllers/workouts');

// GET all workouts
router.get('/', workoutCtrl.index)

// POST new workout
router.post('/', workoutCtrl.create)

module.exports = router;