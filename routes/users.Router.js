var express = require('express');
var router = express.Router();
const usersController = require('../controllers/users.Controller'); // Import the users controller

/* GET users listing. */
router.get('/Hey', usersController.Hey); // Use the 'Hey' function from the users controller for the '/' route
router.get('/', usersController.getAllUsers); // Use the 'getAllUsers' function from the users controller for the '/' route
router.post('/', usersController.createUser); // Use the 'createUser' function from the users controller for the '/' route
router.get('/:id', usersController.getUserById); // Use the 'getUserById' function from the users controller for the '/:id' route
router.put('/:id', usersController.updateUser); // Use the 'updateUser' function from the users controller for the '/:id' route
router.delete('/:id', usersController.deleteUser); // Use the 'deleteUser' function from the users controller for the '/:id' route

module.exports = router;
