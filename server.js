// 載入模組
const express = require('express');
const connectDB = require('./config/db');

const app = express();

// connect Database
connectDB();

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
// use 將中介軟體層連結至 app 實例
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));

// 读取当前目录下环境变量port的值,如果沒設定,就設定5000
const PORT = process.env.PORT || 5000;
// 監聽這個port
app.listen(PORT, () => console.log(`Service started on port ${PORT}`));