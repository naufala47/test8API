const express = require('express');
const router = express.Router();
const usersController = require('../Controller/usersController')

/* GET users listing. */
router.route('/')
  .post(usersController.insertUser)
  .get(usersController.getUser)

router.route('/:id')
  .get(usersController.getUserByID)
  .delete(usersController.deleteUser)

module.exports = router;
