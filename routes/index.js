const express = require('express');
const router = express.Router();
const habitController = require('../controller/habitController')

// Welcome Page 
router.get('/', (req, res) => res.render('welcome'));

router.use('/', require('./habits'));
router.use('/users', require('./users'));

// export whole router module
module.exports = router;