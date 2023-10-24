const express = require('express');
const router = express.Router();
const authController = require('../controllers/Auth/authController');

// Email/Password Registration
router.post('/register-email', authController.registerWithEmail);

// Sign-In with Email/Password
router.post('/signin-email', authController.signInEmail);

// resend email verification link
router.post('/verify-email', authController.resendEmailVerification)

// Google Sign-In
router.post('/google-signin', authController.googleSignIn);

// Other authentication routes, if needed

module.exports = router;
