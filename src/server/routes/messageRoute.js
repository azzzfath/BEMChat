const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

router.post('/messages', messageController.createMessage);

router.get('/receivers/:sender', messageController.getReceiversBySender);

router.get('/chat/:user1/:user2', messageController.getChatBetweenUsers);

router.put('/messages/:id', messageController.updateMessage);

router.delete('/messages/:id', messageController.deleteMessage);

module.exports = router;
