const mongoose = require('mongoose');
const config = require('config');
// config 套件 會去讀取 ./config 資料夾下的檔案
const db = config.get('mangoURI');

// 連線到db async await

const connentDB = async () => {

    try {
        //{ useUnifiedTopology: true, useNewUrlParser: true } 這兩句是警告叫我加的
        await mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('MnogoDB 已連線..');
    } catch (err) {
        console.log(err.message);
        // node js 的語法,裡面code(退出碼默認為0),在調用exit事件監聽之前,node.js不會停止
        // code = 1; 失敗代碼退出
        process.exit(1);
    }
}

module.exports = connentDB;