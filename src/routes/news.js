var express = require('express');
var router = express.Router();

const newController = require('../app/controllers/NewController');

// newController.index();

router.use('/', newController.index);

module.exports = router;