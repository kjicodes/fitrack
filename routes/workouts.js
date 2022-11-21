const express = require('express');
const router = express.Router();
const workoutCtrl = require('../controllers/workouts');

// GET all posts
router.get('/', workoutCtrl.index)

// POST new post
router.post('/', workoutCtrl.create)

module.exports = router;