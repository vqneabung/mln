"use client";

import { useChat } from "@ai-sdk/react";
import { useState } from "react";
import ChatPanel from "@/components/chat/ChatPanel";
import { DefaultChatTransport } from "ai";

export default function ChatPage() {
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  });

  const handleSendMessage = (message: string) => {
    sendMessage({ text: message });
  };

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Chat Panel */}
      <ChatPanel
        messages={messages}
        onSendMessage={handleSendMessage}
        status={status}
      />
    </div>
  );
}
