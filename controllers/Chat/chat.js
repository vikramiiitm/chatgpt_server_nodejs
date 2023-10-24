const firebase_config = require('../../config/firebase-config')
const db = require('../../models/Chat/chat')

async function createConversation(req, res) {
    try {
        const data = req.body;
        data['created_at'] = new Date()
        const docRef = await db.conversation_db.add(data)
        res.status(201).json({ msg: 'Conversation Created', conversationId: docRef.id });
    } catch {
        console.error('Error creating conversation:', error);
        res.status(500).json({ error: 'Failed to create conversation' });
    }
  };


async function getAllConversation(req, res) {

}

module.exports = {createConversation};