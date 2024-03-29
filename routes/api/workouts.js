const express = require('express');
const router = express.Router();
const workoutCtrl = require('../../controllers/workouts');

router.get('/', workoutCtrl.index);
router.post('/', workoutCtrl.create);
router.delete('/:id', workoutCtrl.delete);

module.exports = router;