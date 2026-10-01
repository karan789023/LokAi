import React, { useRef, useState } from "react";
import {
  Plus,
  MessageSquare,
  Search,
  Upload,
  FileText,
  Paperclip,
  Send,
  MoreHorizontal,
  Trash2,
  Settings,
  X,
  Bot,
  User,
  Sparkles,
} from "lucide-react";

const chatHistory = [
  {
    id: 1,
    title: "Explain my DBMS notes",
    time: "Today",
  },
  {
    id: 2,
    title: "Resume improvement ideas",
    time: "Today",
  },
  {
    id: 3,
    title: "Explain React Hooks",
    time: "Yesterday",
  },
  {
    id: 4,
    title: "Machine Learning roadmap",
    time: "Yesterday",
  },
  {
    id: 5,
    title: "System Design basics",
    time: "7 Sep",
  },
];

export default function LokAIChat() {
  const fileInputRef = useRef(null);

  const [message, setMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      type: "text",
      text: "Hello! I'm LokAI 👋 How can I help you today?",
    },
  ]);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (file.type !== "application/pdf") {
      alert("Please upload a PDF file.");
      return;
    }

    setSelectedFile(file);
  };

  const removeFile = () => {
    setSelectedFile(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const sendMessage = async () => {
    const trimmedMessage = message.trim();
    if (!trimmedMessage || isLoading) return;

    const userMessageId = Date.now();
    const aiMessageId = userMessageId + 1;

    // 1. User message state me add karein
    const userMessage = {
      id: userMessageId,
      sender: "user",
      type: "text",
      text: trimmedMessage,
    };

    setMessage("");

    // 2. Check: Kya user ne photo / image generate karne ko bola hai?
    const isImageRequest = /image|photo|picture|draw|banao|generate image|wallpaper/i.test(trimmedMessage);

    if (isImageRequest) {
      // AI message placeholder (loading state)
      const placeholderAi = {
        id: aiMessageId,
        sender: "ai",
        type: "image",
        imageUrl: "",
        text: `Creating image for: "${trimmedMessage}"...`,
      };

      setMessages((prev) => [...prev, userMessage, placeholderAi]);
      setIsLoading(true);

      // Fast AI Image Generation URL
      const encodedPrompt = encodeURIComponent(trimmedMessage);
      const generatedImageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1024&height=1024&nologo=true&seed=${Math.floor(Math.random() * 1000000)}`;

      // Image set karein
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === aiMessageId
            ? {
                ...msg,
                imageUrl: generatedImageUrl,
                text: `Here is your generated image: "${trimmedMessage}"`,
              }
            : msg
        )
      );

      setIsLoading(false);
      return;
    }

    // 3. Normal Text Chat (Streaming)
    const placeholderAiMessage = {
      id: aiMessageId,
      sender: "ai",
      type: "text",
      text: "",
    };

    setMessages((prev) => [...prev, userMessage, placeholderAiMessage]);
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: trimmedMessage }),
      });

      if (!response.ok) {
        throw new Error("Failed to connect to backend server");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });

        // Stream text token-by-token
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === aiMessageId ? { ...msg, text: msg.text + chunk } : msg
          )
        );
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === aiMessageId
            ? {
                ...msg,
                text: "Maaf kijiye, backend server se connect hone me dikkat aa rahi hai. Check karein ki server chalu hai ya nahi.",
              }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-[#f8fafc] text-slate-900">
      <div className="flex h-full">

        {/* ================= SIDEBAR ================= */}
        <aside className="hidden w-[290px] shrink-0 border-r border-slate-200 bg-white md:flex md:flex-col">

          {/* Logo */}
          <div className="flex h-[72px] items-center border-b border-slate-100 px-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-200">
                <Sparkles size={20} />
              </div>

              <div>
                <h1 className="text-lg font-bold tracking-tight">
                  Lok<span className="text-violet-600">AI</span>
                </h1>

                <p className="text-[11px] text-slate-400">
                  Your intelligent workspace
                </p>
              </div>
            </div>
          </div>

          {/* New Chat */}
          <div className="px-4 pt-5">
            <button
              onClick={() => setMessages([])}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800"
            >
              <Plus size={18} />
              New chat
            </button>
          </div>

          {/* Search */}
          <div className="px-4 pt-4">
            <div className="relative">
              <Search
                size={17}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                placeholder="Search chats..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-3 text-sm outline-none transition focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-50"
              />
            </div>
          </div>

          {/* Chat history */}
          <div className="flex-1 overflow-y-auto px-3 pt-5">

            <p className="px-2 pb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Recent chats
            </p>

            <div className="space-y-1">
              {chatHistory.map((chat) => (
                <button
                  key={chat.id}
                  className="group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition hover:bg-slate-100"
                >
                  <MessageSquare
                    size={17}
                    className="shrink-0 text-slate-400 group-hover:text-violet-500"
                  />

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-slate-700">
                      {chat.title}
                    </p>

                    <p className="mt-0.5 text-xs text-slate-400">
                      {chat.time}
                    </p>
                  </div>

                  <MoreHorizontal
                    size={16}
                    className="opacity-0 transition group-hover:opacity-100 text-slate-400"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* PDF Upload */}
          <div className="border-t border-slate-100 p-4">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="group w-full rounded-2xl border border-dashed border-violet-200 bg-violet-50/60 p-4 text-left transition hover:border-violet-400 hover:bg-violet-50"
            >
              <div className="flex items-start gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-violet-600 shadow-sm">
                  <Upload size={18} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    Upload a PDF
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Ask questions about your document with LokAI
                  </p>
                </div>
              </div>
            </button>

            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,application/pdf"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>

          {/* Bottom profile */}
          <div className="border-t border-slate-100 p-4">
            <div className="flex items-center gap-3 rounded-xl p-2 hover:bg-slate-50">

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                K
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold">
                  Karan
                </p>

                <p className="truncate text-xs text-slate-400">
                  Free plan
                </p>
              </div>

              <button className="text-slate-400 hover:text-slate-700">
                <Settings size={17} />
              </button>
            </div>
          </div>
        </aside>

        {/* ================= MAIN CHAT ================= */}
        <main className="flex min-w-0 flex-1 flex-col">

          {/* Header */}
          <header className="flex h-[72px] items-center justify-between border-b border-slate-200 bg-white/90 px-4 backdrop-blur md:px-7">

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-100 text-violet-600 md:hidden">
                <Sparkles size={18} />
              </div>

              <div>
                <h2 className="text-sm font-semibold text-slate-800 md:text-base">
                  {selectedFile ? selectedFile.name : "New conversation"}
                </h2>

                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />

                  <span className="text-xs text-slate-400">
                    LokAI is online
                  </span>
                </div>
              </div>
            </div>

            <button className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700">
              <MoreHorizontal size={19} />
            </button>
          </header>

          {/* Chat body */}
          <div className="flex-1 overflow-y-auto">

            {messages.length === 0 ? (
              <div className="flex h-full items-center justify-center px-5">

                <div className="w-full max-w-2xl text-center">

                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-xl shadow-violet-200">
                    <Bot size={30} />
                  </div>

                  <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                    How can I help you?
                  </h2>

                  <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-500">
                    Ask LokAI anything, generate AI images, or explore your
                    documents with intelligent conversations.
                  </p>

                  <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">

                    {[
                      "Generate an image of a cybernetic horse",
                      "Summarize my documents",
                      "Help me learn DBMS concepts",
                    ].map((item) => (
                      <button
                        key={item}
                        onClick={() => setMessage(item)}
                        className="rounded-xl border border-slate-200 bg-white p-4 text-left text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-md"
                      >
                        {item}
                      </button>
                    ))}

                  </div>
                </div>
              </div>
            ) : (
              <div className="mx-auto w-full max-w-4xl px-4 py-8 md:px-6">

                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`mb-7 flex gap-4 ${
                      msg.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >

                    {msg.sender === "ai" && (
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                        <Bot size={18} />
                      </div>
                    )}

                    <div
                      className={`max-w-[80%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-7 ${
                        msg.sender === "user"
                          ? "rounded-br-md bg-slate-900 text-white"
                          : "rounded-bl-md border border-slate-200 bg-white text-slate-700 shadow-sm"
                      }`}
                    >
                      {/* Image Render */}
                      {msg.type === "image" ? (
                        <div className="space-y-3">
                          <p className="font-medium text-slate-800">{msg.text}</p>
                          {msg.imageUrl && (
                            <img
                              src={msg.imageUrl}
                              alt="Generated by LokAI"
                              className="w-full max-h-[420px] rounded-xl object-cover border border-slate-200 shadow-sm"
                              loading="lazy"
                            />
                          )}
                        </div>
                      ) : (
                        /* Text Render */
                        msg.text || (isLoading && msg.sender === "ai" ? "LokAI is thinking..." : "")
                      )}
                    </div>

                    {msg.sender === "user" && (
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-600">
                        <User size={17} />
                      </div>
                    )}

                  </div>
                ))}

              </div>
            )}
          </div>

          {/* Composer */}
          <div className="border-t border-slate-200 bg-white px-4 py-4 md:px-7 md:py-5">

            <div className="mx-auto w-full max-w-4xl">

              {/* Selected PDF */}
              {selectedFile && (
                <div className="mb-3 flex items-center gap-3 rounded-xl border border-violet-200 bg-violet-50 px-3 py-2.5">

                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-violet-600">
                    <FileText size={17} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-slate-700">
                      {selectedFile.name}
                    </p>

                    <p className="text-xs text-slate-400">
                      PDF document
                    </p>
                  </div>

                  <button
                    onClick={removeFile}
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-white hover:text-slate-700"
                  >
                    <X size={16} />
                  </button>
                </div>
              )}

              {/* Input box */}
              <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_8px_30px_rgba(15,23,42,0.08)] transition focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-50">

                <div className="flex items-end gap-2">

                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="mb-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-slate-400 transition hover:bg-slate-100 hover:text-violet-600"
                    title="Attach PDF"
                  >
                    <Paperclip size={19} />
                  </button>

                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Message LokAI or ask to generate an image..."
                    rows={1}
                    className="max-h-32 min-h-[42px] flex-1 resize-none bg-transparent px-1 py-2.5 text-sm text-slate-800 outline-none placeholder:text-slate-400"
                  />

                  <button
                    onClick={sendMessage}
                    disabled={!message.trim() || isLoading}
                    className="mb-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white transition hover:bg-violet-600 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    <Send size={18} />
                  </button>

                </div>
              </div>

              <p className="mt-2 text-center text-[11px] text-slate-400">
                LokAI can make mistakes. Verify important information.
              </p>

            </div>
          </div>

        </main>
      </div>
    </div>
  );
}