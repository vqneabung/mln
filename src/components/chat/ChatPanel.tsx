import { useState, useRef, useEffect } from "react";
import { UIMessage } from "@ai-sdk/react";
import { ChatbotIcon } from "../ChatbotIcon";

interface ChatPanelProps {
  messages: UIMessage[];
  onSendMessage: (message: string) => void;
  status: string;
}

export default function ChatPanel({
  messages,
  onSendMessage,
  status,
}: ChatPanelProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [input, setInput] = useState("");
  const chatBodyRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && status !== "streaming") {
      onSendMessage(input);
      setInput("");
    }
  };

  // const handleQuickQuestion = (question: string) => {
  //   onSendMessage(question);
  // };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "86%",
        width: "100%",
        position: "relative",
      }}
    >
      {/* Chat Body */}
      <div 
        ref={chatBodyRef} 
        className="chat-body"
        style={{
          overflowY: 'auto',
          flex: 1,
          minHeight: 0,
          paddingBottom: '10px', // Space for sticky footer
        }}
      >
        {/* Welcome message */}
        <div className="message bot-message">
          <ChatbotIcon />
          <p className="message-text">
            Chào bạn 😙, <br />
            Tôi có thể giúp gì cho bạn về triết học nè?
          </p>
        </div>

        {/* Messages */}
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${
              message.role === "assistant" ? "bot-message" : "user-message"
            }`}
          >
            {message.role === "assistant" && <ChatbotIcon />}
            <p className="message-text">
              {message.parts.map((part: any, index: number) =>
                part.type === "text" ? (
                  <span key={index}>{part.text}</span>
                ) : null
              )}
            </p>
          </div>
        ))}

        {/* Thinking indicator */}
        {status === "streaming" && (
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">Đang suy nghĩ...</p>
          </div>
        )}
      </div>

      {/* Chat Footer */}
      <div 
        className="chat-footer"
        style={{
          flexShrink: 0,
          position: 'sticky',
          bottom: 0,
        }}
      >
        <form onSubmit={handleSubmit} className="chat-form">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Hỏi về triết học Mác-Lênin..."
            className="message-input"
            disabled={status === "streaming"}
          />
          <button
            type="submit"
            disabled={!input.trim() || status === "streaming"}
            style={{ display: input.trim() ? "block" : "none" }}
          >
            ➤
          </button>
        </form>
      </div>
    </div>
  );
}


{/* Suggested Questions - Only show when no messages
        {messages.length === 0 && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              marginTop: "12px",
              padding: "0 18px",
            }}
          >
            <button
              onClick={() =>
                handleQuickQuestion("Chủ nghĩa duy vật biện chứng là gì?")
              }
              style={{
                fontSize: "12px",
                padding: "6px 12px",
                border: "1px solid #8b4513",
                borderRadius: "20px",
                background: "transparent",
                color: "#8b4513",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              Chủ nghĩa duy vật biện chứng là gì?
            </button>
            <button
              onClick={() =>
                handleQuickQuestion(
                  "Các quy luật của chủ nghĩa duy vật lịch sử?"
                )
              }
              style={{
                fontSize: "12px",
                padding: "6px 12px",
                border: "1px solid #8b4513",
                borderRadius: "20px",
                background: "transparent",
                color: "#8b4513",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              Các quy luật của chủ nghĩa duy vật lịch sử?
            </button>
            <button
              onClick={() =>
                handleQuickQuestion(
                  "Mối quan hệ giai cấp - dân tộc - nhân loại?"
                )
              }
              style={{
                fontSize: "12px",
                padding: "6px 12px",
                border: "1px solid #8b4513",
                borderRadius: "20px",
                background: "transparent",
                color: "#8b4513",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              Mối quan hệ giai cấp - dân tộc - nhân loại?
            </button>
          </div>
        )} */}