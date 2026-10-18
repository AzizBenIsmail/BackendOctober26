var express = require('express');
var router = express.Router();
const usersController = require('../controllers/users.Controller'); // Import the users controller

/* GET users listing. */
router.get('/Hey', usersController.Hey); // Use the 'Hey' function from the users controller for the '/' route


module.exports = router;
