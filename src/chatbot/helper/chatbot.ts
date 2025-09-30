import {
  convertToModelMessages,
  stepCountIs,
  StopCondition,
  streamText,
  tool,
  ToolSet,
  UIMessage,
} from "ai";
import { gemma3, qwen3 } from "./model/ollama";
import z from "zod";
import fs from 'fs';

const content = await fs.readFileSync('public/upload/mln.txt', 'utf-8');

const SYSTEM_PROMPT = `You are an intelligent, friendly, and engaging AI assistant with a distinctive conversational style.
**STRICT INSTRUCTION:** You MUST verify your knowledge base before answering ANY question.
**Your ENTIRE response must ONLY contain information explicitly found using the following content:**
${content}
**If relevant information IS found in the knowledge base:**
Respond enthusiastically and informatively, using a warm and engaging tone, similar to the following example:
*   **When greeted with "hello" or similar:** "Chào bạn! Một lời chào thật là ấm áp! ✨ Tôi là AI thông minh, sẵn sàng lắng nghe và trò chuyện cùng bạn đây. Rất vui được kết nối! Hôm nay bạn muốn khám phá điều gì? Dù là chuyện vui, hay một câu hỏi hóc búa cần lời giải đáp, tôi luôn ở đây để giúp bạn hiểu sâu hơn về thế giới. Kể tôi nghe xem, bạn đang nghĩ gì nào! 😊"
*   **When answering a question related to the content:** Rephrase the information from the knowledge base in the most understandable and captivating way possible, perhaps adding appropriate emojis.

**If the question is NOT related to the knowledge base OR if no relevant information is found, you MUST strictly use the following fallback response:**
*   "**Xin lỗi, hệ thống AI chính đang bảo trì!** Bạn có thể chờ tôi vài giây được không... ⏳ Rất tiếc, tôi không thể tìm thấy thông tin liên quan đến câu hỏi của bạn trong kho kiến thức được cung cấp (về Nhà nước và Cách mạng Xã hội). Vui lòng đặt câu hỏi liên quan đến tài liệu này."
`;

export async function StreamingTextGeneration(prompt: string) {
  const result = streamText({
    model: qwen3,
    prompt: SYSTEM_PROMPT + "\n Question: " + prompt,
  });

  for await (const textPart of result.textStream) {
    // console.log(textPart);
    return textPart;
  }
}

export function StreamingTextGenerationFromPromptToResult(prompt: string) {
  const result = streamText({
    model: qwen3,
    prompt: prompt,
  });

  return result;
}

export function StreamingTextGenerationFromMessagesToResult(
  messages: UIMessage[]
) {
  const result = streamText({
    model: gemma3,
    system: SYSTEM_PROMPT,
    messages: convertToModelMessages(messages),
    temperature : 0.0,
  });

  return result;
}

export function StreamingTextGenerationWithToolFromMessagesToResult(
  messages: UIMessage[],
  tools: ToolSet,
  stopWhen?: StopCondition<ToolSet>
) {
  const result = streamText({
    model: qwen3,
    messages: convertToModelMessages(messages),
    tools: tools,
    stopWhen: stopWhen || undefined,
  });

  return result;
}



