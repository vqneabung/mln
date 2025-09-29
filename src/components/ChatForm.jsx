'use client'

import { useRef } from "react";
export function ChatForm({ chatHistory, setChatHistory, generateBotResponse }) {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = "";

    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
    ]);

    // Simulate bot response after a delay
    setTimeout(() => {
      setChatHistory((history) => [
        ...history,
        { role: "model", text: "Thinking..." },
      ]);
      // Call the function to generate bot response
      generateBotResponse([
        ...chatHistory,
        {
          role: "user",
          text: `Vui lòng dựa trên các chi tiết đã nêu ở trên để trả lời câu hỏi này: ${userMessage}`,
        },
      ]);
    }, 600);
  };

  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Message..."
        className="message-input"
        required
      />
      <button className="material-symbols-outlined">arrow_upward</button>
    </form>
  );
}

export default ChatForm;
