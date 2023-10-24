const express = require('express');
const app = express();
// const admin = require('firebase-admin');

// // Configure Firebase with your service account key
// const serviceAccount = require('./config/FireBaseServiceAccount.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   // Other Firebase configurations
// });

// Middleware
app.use(express.json());

// Routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// Define other API routes here

module.exports = app;
