const express = require('express');
const cors = require('cors');
const globalRoutes = require('./routes');

const app = express();

// Middlewares cơ bản
app.use(cors());
app.use(express.json()); // Đọc dữ liệu JSON từ request body
app.use(express.urlencoded({ extended: true }));

// Định tuyến API
app.use('/api/v1', globalRoutes);

// Test route nhanh
app.get('/', (req, res) => {
    res.send('API Hệ thống Quản lý Sinh viên đang hoạt động tốt!');
});

module.exports = app;