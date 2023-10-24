firebase_config = require('../../config/firebase-config')

const db = firebase_config.db

const conversation_db = db.collection("Conversation")

module.exports = {conversation_db}