import React, { useState } from 'react';

const ChatUI = () => {
  const [input, setInput] = useState('');
  // Dummy messages UI dekhne ke liye
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Hello! Main aapka AI Assistant hoon. Main online aur offline dono mode mein aapki madad kar sakta hoon. Batiye main aapke liye kya kar sakta hoon?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // User ka message add karein
    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);
    setInput('');
    setIsTyping(true);

    // Yahan baad mein hum actual backend API (ya offline local model) call karenge
    setTimeout(() => {
      setMessages((prev) => [
        ...prev, 
        { sender: 'ai', text: 'Yeh ek test response hai. Jab hum backend connect karenge, toh yahan real AI ka jawab aayega.' }
      ]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="chat-area">
      <div className="messages-container">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <strong>{msg.sender === 'user' ? 'You' : 'AI Assistant'}</strong>
            <div style={{ marginTop: '5px' }}>{msg.text}</div>
          </div>
        ))}
        {isTyping && (
          <div className="message ai">
            <em>AI is typing...</em>
          </div>
        )}
      </div>

      <div className="input-area">
        <form className="input-form" onSubmit={handleSend}>
          <input
            type="text"
            className="chat-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Apna sawaal yahan type karein..."
          />
          <button type="submit" className="send-btn" disabled={!input.trim()}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatUI;