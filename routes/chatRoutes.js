const express = require('express');
const router = express.Router();
const chatController = require('../controllers/Chat/chat');


router.post('/create-conversation', chatController.createConversation);

module.exports = router