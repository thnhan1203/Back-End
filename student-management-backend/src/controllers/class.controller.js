exports.getAllClasses = async (req, res) => {
    try {
        res.status(200).json({
            status: 'success',
            message: 'Lấy danh sách lớp học thành công!',
            data: []
        });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.createClass = async (req, res) => {
    res.status(201).json({ status: 'success', message: 'Tạo lớp học mới thành công' });
};