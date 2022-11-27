
const express = require('express');
const router = express.Router();

router.get('/about', (req, res) => {
    res.render('articles/about')
})


module.exports = router