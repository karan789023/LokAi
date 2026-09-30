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
