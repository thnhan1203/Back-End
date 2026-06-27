const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student.controller');

// Định nghĩa các CRUD endpoints cho Student
router.get('/', studentController.getAllStudents);
router.get('/:id', studentController.getStudentById);
router.post('/', studentController.createStudent);
router.put('/:id', studentController.updateStudent);
router.delete('/:id', studentController.deleteStudent);

module.exports = router;