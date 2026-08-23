import React from 'react';
import Sidebar from './components/Sidebar';
import ChatUI from './components/ChatUI';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <ChatUI />
    </div>
  );
}

export default App;