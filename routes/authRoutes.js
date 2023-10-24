const express = require('express');
const router = express.Router();
const authController = require('../controllers/Auth/authController');

// Email/Password Registration
router.post('/register-email', authController.registerWithEmail);

// Sign-In with Email/Password
router.post('/signin-email', authController.signInEmail);

// Google Sign-In
router.post('/google-signin', authController.googleSignIn);

// Other authentication routes, if needed

module.exports = router;
