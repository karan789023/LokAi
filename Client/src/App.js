<<<<<<< HEAD
import React from 'react';
import HomePage from '../src/Pages/homePage.jsx';
import './index.css';
import '../src/Pages/chat.jsx';
=======
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Pages
import HomePage from "./Pages/homePage.jsx";
import Chat from "./Pages/chat.jsx";

>>>>>>> 6c40eb7d5e9d45e3e114564b3f613cb7b3b73da8

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Chat */}
        <Route path="/chat" element={<Chat />} />

        {/* Unknown URL → Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
