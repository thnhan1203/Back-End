const studentService = require('../services/student.service');

exports.getAllStudents = async (req, res) => {
    try {
        const students = studentService.getAllStudents();
        res.status(200).json({
            status: 'success',
            message: 'Lấy danh sách sinh viên thành công!',
            data: students
        });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.getStudentById = async (req, res) => {
    try {
        const student = studentService.getStudentById(req.params.id);

        if (!student) {
            return res.status(404).json({ status: 'error', message: 'Không tìm thấy sinh viên' });
        }

        res.status(200).json({ status: 'success', data: student });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.createStudent = async (req, res) => {
    try {
        const student = studentService.createStudent(req.body);
        res.status(201).json({ status: 'success', message: 'Tạo sinh viên thành công', data: student });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.updateStudent = async (req, res) => {
    try {
        const student = studentService.updateStudent(req.params.id, req.body);

        if (!student) {
            return res.status(404).json({ status: 'error', message: 'Không tìm thấy sinh viên' });
        }

        res.status(200).json({ status: 'success', message: 'Cập nhật sinh viên thành công', data: student });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.deleteStudent = async (req, res) => {
    try {
        const student = studentService.deleteStudent(req.params.id);

        if (!student) {
            return res.status(404).json({ status: 'error', message: 'Không tìm thấy sinh viên' });
        }

        res.status(200).json({ status: 'success', message: 'Xóa sinh viên thành công', data: student });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
};