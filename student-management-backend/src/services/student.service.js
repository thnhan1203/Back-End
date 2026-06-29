const { students } = require('../models/student.model');

let nextStudentId = students.length + 1;

exports.getAllStudents = () => students;

exports.getStudentById = (id) => students.find((student) => student.id === Number(id));

exports.createStudent = (payload) => {
  const newStudent = {
    id: nextStudentId++,
    ...payload
  };

  students.push(newStudent);
  return newStudent;
};

exports.updateStudent = (id, payload) => {
  const index = students.findIndex((student) => student.id === Number(id));

  if (index === -1) return null;

  students[index] = {
    ...students[index],
    ...payload,
    id: Number(id)
  };

  return students[index];
};

exports.deleteStudent = (id) => {
  const index = students.findIndex((student) => student.id === Number(id));

  if (index === -1) return null;

  const [deletedStudent] = students.splice(index, 1);
  return deletedStudent;
};
