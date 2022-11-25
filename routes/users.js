const express = require('express');
const router = express.Router();
const userController = require('../controller/userController')

//Login Page
router.get('/login', (req, res) => res.render('login'));

//Register Page
router.get('/register', (req, res) => res.render('register'));

//Register Handle
router.post('/register', userController.create);

//Login Handle
router.post('/login', userController.login);

//Logout Handle
router.get('/logout', (req, res) => {
    // req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/users/login');
});

module.exports = router;