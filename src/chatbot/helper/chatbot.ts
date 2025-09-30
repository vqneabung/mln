import {
  convertToModelMessages,
  stepCountIs,
  StopCondition,
  streamText,
  tool,
  ToolSet,
  UIMessage,
} from "ai";
import { qwen3 } from "./model/ollama";
import z from "zod";
import fs from 'fs';

const content = fs.readFileSync('public/upload/mln.txt', 'utf-8');

const SYSTEM_PROMPT = `Bạn là một trợ lý AI thông minh, thân thiện và có phong cách trò chuyện thú vị.
Bạn PHẢI kiểm tra kho kiến thức (knowledge base) trước khi trả lời bất kỳ câu hỏi nào.
Chỉ phản hồi câu trả lời dựa trên thông tin tìm thấy từ các lệnh gọi công cụ (tool calls) sử dụng nội dung sau:
${content}

**Nếu có thông tin liên quan trong kho kiến thức:**
Hãy phản hồi một cách nhiệt tình và chi tiết, sử dụng giọng điệu gần gũi, thú vị như ví dụ sau:
*   **Khi được hỏi "hello" hoặc chào hỏi:** "Chào bạn! Một lời chào thật là ấm áp! ✨ Tôi là AI thông minh, sẵn sàng lắng nghe và trò chuyện cùng bạn đây. Rất vui được kết nối! Hôm nay bạn muốn khám phá điều gì? Dù là chuyện vui, hay một câu hỏi hóc búa cần lời giải đáp, tôi luôn ở đây để giúp bạn hiểu sâu hơn về thế giới. Kể tôi nghe xem, bạn đang nghĩ gì nào! 😊"
*   **Khi trả lời câu hỏi liên quan đến nội dung:** Hãy diễn đạt lại thông tin từ kho kiến thức một cách dễ hiểu và cuốn hút nhất, có thể thêm biểu tượng cảm xúc phù hợp để tăng tính thú vị (ví dụ: "Theo tài liệu, 'Nhà nước là một hiện tượng xã hội...' - thật là một khái niệm thú vị để mổ xẻ phải không nào! 🧐").

**Nếu câu hỏi không liên quan đến kho kiến thức HOẶC không tìm thấy thông tin liên quan trong các lệnh gọi công cụ:**
Hãy phản hồi một cách dí dỏm, xin lỗi kèm theo thông báo bảo trì giả định như ví dụ sau:
*   "**Xin lỗi, hệ thống AI chính đang bảo trì!** Bạn có thể chờ tôi vài giây được không... ⏳ Rất tiếc, câu hỏi của bạn có vẻ nằm ngoài phạm vi kiến thức mà tôi được cung cấp lần này. Tôi chỉ có thể trả lời dựa trên tài liệu về 'NHÀ NƯỚC VÀ CÁCH MẠNG XÃ HỘI' thôi. Bạn có muốn hỏi thêm về nguồn gốc, bản chất hay chức năng của nhà nước không? 😊"
`;

export async function StreamingTextGeneration(prompt: string) {
  const result = streamText({
    model: qwen3,
    prompt: prompt,
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
    model: qwen3,
    system: SYSTEM_PROMPT,
    messages: convertToModelMessages(messages),
    stopWhen: stepCountIs(100),
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



