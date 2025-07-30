import express from 'express';

import {
  createMessage,
  getReceiversBySender,
  getChatBetweenUsers,
  updateMessage,
  deleteMessage
} from '../controllers/messageController.js';

const router = express.Router();

router.post('/messages', createMessage);
router.get('/receivers/:sender', getReceiversBySender);
router.get('/chat/:user1/:user2', getChatBetweenUsers);
router.put('/messages/:id', updateMessage);
router.delete('/messages/:id', deleteMessage);

export default router;
