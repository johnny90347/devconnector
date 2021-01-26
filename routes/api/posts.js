const express = require('express');
const router = express.Router();

// 這邊放註解
// @route GET api/posts
// @desc 測試用
// @access Public (代表不需要token 那些的東東)
router.get('/', (req, res) => res.send('Posts Route'));

module.exports = router;