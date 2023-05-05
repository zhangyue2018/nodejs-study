const express = require('express');

// 创建路由对象
const router = express.Router();

router.get('/home', (req, res) => {
    res.send('前台首页');
});

module.exports = router;