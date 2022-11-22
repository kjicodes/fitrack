const express = require('express');
const router = express.Router();
const contactCtrl = require('../../controllers/contacts');

// GET /api/contacts
router.get('/', contactCtrl.index)

router.post('/', contactCtrl.create)

module.exports = router;