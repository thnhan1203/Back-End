const express = require('express');
const router = express.Router();

// Import các routes thành phần
const studentRoutes = require('./student.routes');
const classRoutes = require('./class.routes');
const userRoutes = require('./user.routes');

// Gắn các tiền tố endpoint (Prefix) cho từng module
router.use('/students', studentRoutes);
router.use('/classes', classRoutes);
router.use('/users', userRoutes);

module.exports = router;