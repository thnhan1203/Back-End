const express = require('express');
const router = express.Router();
const classController = require('../controllers/class.controller');

router.get('/', classController.getAllClasses);
router.post('/', classController.createClass);

module.exports = router;