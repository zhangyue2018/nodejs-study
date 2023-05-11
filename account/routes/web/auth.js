const express = require('express');

const router = express.Router();

router.get('/reg', (req, res) => {
    res.render('auth/reg');
});

module.exports = router;