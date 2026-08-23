// Server/src/services/chat/chatService.js
const Message = require('../../models/Message');

// Save a new message to the database
const saveMessage = async (userId, text, isAiResponse = false) => {
  try {
    const message = await Message.create({
      user: userId,
      text,
      isAiResponse
    });
    return message;
  } catch (error) {
    throw new Error('Database error: Could not save message');
  }
};

// Retrieve chat history for a specific user
const getChatHistory = async (userId) => {
  try {
    // Fetches the last 50 messages, oldest first
    const history = await Message.find({ user: userId })
      .sort({ createdAt: 1 })
      .limit(50);
    return history;
  } catch (error) {
    throw new Error('Database error: Could not fetch chat history');
  }
};

module.exports = {
  saveMessage,
  getChatHistory
};