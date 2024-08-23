// routes/authHandling.js

const express = require('express');
const router = express.Router(); // Change handler to this router
const authentication = require('../service/security/authentication');

// DB Files
const authController = require('../controllers/authController');
const authorisation = require('../service/security/authorisation');

// existing Routes
router.post('/login', (req, res) => authController.login(req, res));
router.post('/logout', (req, res) => authController.logout(req, res));
router.post('/register', (req, res) => authController.register(req, res));

// new route for user deletion
router.post('/delete/user', authentication, authorisation({ isAdmin: false }), (req, res) => authController.delete_user_by_username(req, res));

// existing Routes
router.get('/user', authentication, authorisation('user'), (req, res) => authController.load_user_profile(req, res));
router.put('/user', authentication, authorisation('user'), (req, res) => authController.update_user_profile(req, res));

module.exports = router;
