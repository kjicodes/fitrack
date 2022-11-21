const Contact = require('../models/Contact');

module.exports = {
  index, 
  create
};

function index(req, res) {
  Contact.find({}, function(err, contacts) {
    if (err) {
      res.status(500).json(err)
    }
    res.json(contacts).status(200)
  })
};

function create(req, res) {
  Contact.create(req.body, function(err, contact) {
    res.status(200).json('ok')
  })
};