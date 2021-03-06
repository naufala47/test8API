const express = require('express');
//penampung router dari express
const router = express.Router()
//import file controller
const hewanController = require('../Controller/hewanController')

router.route('/')
    .post(hewanController.insertHewan)
    .get(hewanController.getHewan)

router.route('/:id')
    .get(hewanController.getHewanByID)
    .patch(hewanController.updateHewan)
    .delete(hewanController.deleteHewan)
//yang di export adalah router
module.exports = router