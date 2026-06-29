const classService = require('../services/class.service');

exports.getAllClasses = async (req, res) => {
    try {
        const classes = classService.getAllClasses();
        res.status(200).json({
            status: 'success',
            message: 'Lấy danh sách lớp học thành công!',
            data: classes
        });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.createClass = async (req, res) => {
    try {
        const newClass = classService.createClass(req.body);
        res.status(201).json({ status: 'success', message: 'Tạo lớp học mới thành công', data: newClass });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
};