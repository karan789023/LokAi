import React from 'react';
import { ChatContainer } from '../components/ChatContainer';

export const ChatPage = () => {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Navigation / History Sidebar */}
      <aside className="w-64 border-r border-gray-200 dark:border-gray-800 flex flex-col justify-between p-4 bg-white dark:bg-gray-950 hidden md:flex">
        <div>
          <div className="flex items-center gap-2 mb-6 px-2">
            <div className="w-3 h-3 rounded-full bg-blue-600" />
            <span className="font-semibold text-sm tracking-wide text-gray-900 dark:text-white">
              HYBRID AI
            </span>
          </div>

          <button
            onClick={() => window.location.reload()}
            className="w-full text-left px-3 py-2 text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            + New Conversation
          </button>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-3 px-2">
          <p className="text-[11px] text-gray-400 dark:text-gray-500 font-mono">
            Orchestrator: Dynamic Routing
          </p>
        </div>
      </aside>

      {/* Main Chat View */}
      <main className="flex-1 flex flex-col h-full relative">
        <ChatContainer />
      </main>
    </div>
  );
};