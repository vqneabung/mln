"use client";

import { useRef, useState, useEffect } from "react";
import { ChatbotIcon } from "./ChatbotIcon";
import { useChat } from "@ai-sdk/react";
import ChatMessages, { ChatMessage } from "./chat/ChatMessages";
import { DefaultChatTransport } from "ai";
import ChatPanel from "./chat/ChatPanel";

export function Chatbot() {
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  });

  const [showChatbot, setShowChatbot] = useState(false);
  const chatbodyRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = (message: string) => {
    sendMessage({ text: message });
  };

  return (
    <div className={`chatbot-container ${showChatbot ? "show-chatbot" : ""}`}>
      <button
        onClick={() => setShowChatbot((prev) => !prev)}
        id="chatbot-toggler"
      >
        <span className="material-symbols-outlined">mode_comment</span>
        <span className="material-symbols-outlined">close</span>
      </button>
      <div className="chatbot-popup">
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">Triết học AI</h2>
          </div>
          <button
            onClick={() => setShowChatbot((prev) => !prev)}
            className="material-symbols-outlined"
          >
            keyboard_arrow_down
          </button>
        </div>

        <ChatPanel
          messages={messages}
          onSendMessage={handleSendMessage}
          status={status}
        />
        
      </div>
    </div>
  );
}
