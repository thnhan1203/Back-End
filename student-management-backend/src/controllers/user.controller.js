exports.getAllUsers = async (req, res) => {
    try {
        res.status(200).json({
            status: 'success',
            message: 'Lấy danh sách người dùng thành công!',
            data: []
        });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.createUser = async (req, res) => {
    res.status(201).json({ status: 'success', message: 'Tạo người dùng mới thành công' });
};