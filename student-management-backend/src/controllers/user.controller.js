const userService = require('../services/user.service');

exports.getAllUsers = async (req, res) => {
    try {
        const users = userService.getAllUsers();
        res.status(200).json({
            status: 'success',
            message: 'Lấy danh sách người dùng thành công!',
            data: users
        });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.createUser = async (req, res) => {
    try {
        const newUser = userService.createUser(req.body);
        res.status(201).json({ status: 'success', message: 'Tạo người dùng mới thành công', data: newUser });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
};