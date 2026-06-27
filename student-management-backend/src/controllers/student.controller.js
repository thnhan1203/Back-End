// Placeholder tạm thời khi chưa kết nối Database thực tế
exports.getAllStudents = async (req, res) => {
    try {
        res.status(200).json({
            status: 'success',
            message: 'Lấy danh sách sinh viên thành công!',
            data: []
        });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.getStudentById = async (req, res) => {
    res.send(`Lấy thông tin sinh viên có ID: ${req.params.id}`);
};

exports.createStudent = async (req, res) => {
    res.send('Thêm sinh viên mới');
};

exports.updateStudent = async (req, res) => {
    res.send(`Cập nhật sinh viên ID: ${req.params.id}`);
};

exports.deleteStudent = async (req, res) => {
    res.send(`Xóa sinh viên ID: ${req.params.id}`);
};