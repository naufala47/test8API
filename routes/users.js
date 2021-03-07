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

router.route('/userEmail/:userEmail')
  .get(usersController.getUserByEmail)
router.route('/userPhone/:userPhone')
  .get(usersController.getUserByPhone)
router.route('/userAddress/:userAddress')
  .get(usersController.getUserByAddress)

module.exports = router;
