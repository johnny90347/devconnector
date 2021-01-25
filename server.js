// 載入模組
const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('API Running'));

// 读取当前目录下环境变量port的值,如果沒設定,就設定5000
const PORT = process.env.PORT || 5000;
// 監聽這個port
app.listen(PORT, () => console.log(`Service started on port ${PORT}`));