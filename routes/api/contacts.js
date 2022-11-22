const express = require('express');
const router = express.Router();
const contactCtrl = require('../../controllers/contacts');

// GET /api/contacts
router.get('/contacts', contactCtrl.index)

module.exports = router;