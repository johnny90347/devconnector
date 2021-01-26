const express = require('express');
const router = express.Router();

// 這邊放註解
// @route GET api/users
// @desc 測試用
// @access Public (代表不需要token 那些的東東)
router.get('/', (req, res) => res.send('User Route'));
// 如果這邊是寫 /name 就是打得api 要改成api/users/name  

module.exports = router;