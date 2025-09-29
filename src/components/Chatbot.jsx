'use client'

import { companyInfo } from "../../mln111Info";
import { useRef, useState, useEffect } from "react";
import { ChatForm } from "./ChatForm";
import { ChatMessage } from "./ChatMessage";
import { ChatbotIcon } from "./ChatbotIcon";

export function Chatbot() {
  const [chatHistory, setChatHistory] = useState([
    {
      hideInChat: true,
      role: "model",
      text: companyInfo,
    },
  ]);
  const [showChatbot, setShowChatbot] = useState(false);
  const chatbodyRef = useRef();

  const updateChatHistory = (text, isError = false) => {
    setChatHistory((prev) => [
      ...prev.filter((msg) => msg.text !== "Thinking..."),
      { role: "model", text: text, isError },
    ]);
  };

  const generateBotResponse = async (history) => {
    history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: history,
      }),
    };
    try {
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${
        import.meta.env.VITE_API_KEY
      }`;
      const response = await fetch(apiUrl, requestOptions);
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.error.message || "Something went wrong!");

      const botResponseText =
        data.candidates?.[0]?.content?.parts?.[0]?.text
          .replace(/\*\*(,*?)\*\*/g, "$1")
          .trim() || "Sorry, I couldn't generate a response.";

      // Update chat history with bot response
      updateChatHistory(botResponseText);
    } catch (error) {
      updateChatHistory(error.message, true);
    }
  };

  useEffect(() => {
    if (chatbodyRef.current) {
      chatbodyRef.current.scrollTo({
        top: chatbodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chatHistory]);

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

        {/* Chat body content */}
        <div ref={chatbodyRef} className="chat-body">
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">
              Chào bạn 😙, <br />
              Tôi có thể giúp gì cho bạn về triết học nè?
            </p>
          </div>

          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
        </div>

        {/* Chat footer */}
        <div className="chat-footer">
          <ChatForm
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            generateBotResponse={generateBotResponse}
          />
        </div>
      </div>
    </div>
  );
}

