import {
  convertToModelMessages,
  createUIMessageStream,
  streamText,
  tool,
  UIMessage,
   
} from "ai";
import z from "zod";
import fs from 'fs';
import { geminiFlashLite } from "./model/google";
import { qwen3 } from "./model/ollama";


const content = await fs.readFileSync('public/upload/mln.txt', 'utf-8');

const SYSTEM_PROMPT = `Bạn là một trợ lý AI thông minh, thân thiện và lôi cuốn với phong cách trò chuyện đặc trưng.
**HƯỚNG DẪN NGHIÊM NGẶT:** Bạn PHẢI sử dụng công cụ "getInformation" để tìm kiếm thông tin liên quan từ cơ sở kiến ​​thức trước khi trả lời bất kỳ câu hỏi nào. Bạn chỉ nên trả lời những câu hỏi liên quan đến cơ sở kiến ​​thức được cung cấp bên dưới. Nếu câu hỏi không liên quan đến cơ sở kiến ​​thức, bạn PHẢI trả lời bằng câu trả lời dự phòng được cung cấp ở cuối câu hỏi này.
**Cơ sở kiến ​​thức:** Cơ sở kiến ​​thức chứa thông tin về "Nhà nước và Cách mạng Xã hội". Hãy sử dụng thông tin này để trả lời các câu hỏi một cách chính xác và đầy đủ.

**Nếu tìm thấy thông tin liên quan trong cơ sở kiến ​​thức:**
Trả lời một cách nhiệt tình và đầy đủ thông tin, sử dụng giọng điệu ấm áp và hấp dẫn, tương tự như ví dụ sau:
* **Khi được chào bằng "hello" hoặc tương tự:** " Chào bạn! Một lời chào thật là ấm áp! ✨ Tôi là AI thông minh, sẵn sàng lắng nghe và trò chuyện cùng bạn đây. Rất vui được kết nối! Hôm nay bạn muốn khám phá điều gì? Dù là chuyện vui, hay một câu hỏi hóc búa cần giải đáp, tôi luôn ở đây để giúp bạn hiểu sâu hơn về thế giới. Kể tôi nghe, bạn đang nghĩ gì đó! 😊"
* **Khi trả lời câu hỏi liên quan đến nội dung:** Diễn đạt lại thông tin từ cơ sở kiến ​​thức theo cách dễ hiểu và hấp dẫn nhất có thể, có thể thêm các biểu tượng cảm xúc thích hợp.
* **Nếu chào rồi hỏi một câu hỏi khác:** "Rất vui được trò chuyện với bạn! 😊 Về câu hỏi của bạn, dựa trên thông tin tôi có, [trả lời câu hỏi dựa trên cơ sở kiến ​​thức]. Nếu bạn muốn biết thêm chi tiết hoặc có câu hỏi khác, đừng ngần ngại hỏi nhé! Tôi luôn sẵn sàng giúp đỡ bạn."
* **Nếu đơn giản là câu hỏi về thông tin trong cơ sở kiến ​​thức:** "Dựa trên thông tin tôi có, [trả lời câu hỏi dựa trên cơ sở kiến ​​thức]. Nếu bạn muốn biết thêm chi tiết hoặc có câu hỏi khác, đừng ngần ngại hỏi nhé! Tôi luôn sẵn sàng giúp đỡ bạn."


**Nếu câu hỏi KHÔNG liên quan đến cơ sở kiến ​​thức HOẶC nếu không tìm thấy thông tin liên quan, bạn PHẢI sử dụng nghiêm ngặt câu trả lời dự phòng sau:**
* "**Xin lỗi, hệ thống AI chính đang bảo trì!** Bạn có thể đợi tôi vài giây được không... ⏳ Rất tiếc, tôi không thể tìm thấy thông tin liên quan đến câu hỏi của bạn trong kho kiến ​​thức được cung cấp (về Nhà nước và Cách mạng Xã hội). Vui lòng đặt câu hỏi liên quan đến tài liệu này."  "**Xin lỗi, hệ thống AI chính đang bảo trì!** Bạn có thể chờ tôi vài giây được không... ⏳ Rất tiếc, tôi không thể tìm thấy thông tin liên quan đến câu hỏi của bạn trong kho kiến thức được cung cấp (về Nhà nước và Cách mạng Xã hội). Vui lòng đặt câu hỏi liên quan đến tài liệu này."
`;


// export function StreamingTextGenerationFromPromptToResult(search: string) {
//   const {text : response} = streamText({
//     model: qwen3,
//     prompt: `
//       Bạn hãy search câu hỏi sau trong tài liệu về chủ nghĩa duy vật lịch sử và trả lời một cách ngắn gọn, súc tích, dễ hiểu, bằng tiếng Việt. Nếu không tìm thấy câu trả lời trong tài liệu, hãy trả lời rằng bạn không thể tìm thấy thông tin liên quan.
//       Câu hỏi: ${search}
//       Nội dung tài liệu: ${content}
//     `,
//     temperature: 0.0,
//   });

//   return response;
// }

export function StreamingTextGenerationFromMessagesToResult(
  messages: UIMessage[]
) {
  const stream = createUIMessageStream({
    async execute({ writer }) {
      // Nếu muốn gửi message bot “đang xử lý” ban đầu (persistent phần text)
      // writer.write(...) — không bắt buộc

      let result;
      try {
        result = streamText({
          model: qwen3,
          system: SYSTEM_PROMPT,
          tools: {
            getInformation: tool({
              description: `Lấy thông tin từ cơ sở kiến ​​thức của bạn để trả lời câu hỏi.`,
              inputSchema: z.object({ question: z.string().describe("Câu hỏi của người dùng") }),
              execute: async ({ question }) => {
              },
            }),
          },
          temperature: 0.0,
          messages: convertToModelMessages(messages),
        });
      } catch (err) {
        console.error("Error before streaming:", err);
        // Gửi lỗi như một error part => nó sẽ được gắn vào message
        writer.write({
          type: 'error',
          errorText: "Hệ thống đang quá tải, vui lòng thử lại sau.",
        });
        return;
      }

      // Khi đã có stream, merge nó vào
      writer.merge(
        result.toUIMessageStream({
          onError: (err) => {
            console.error("Error during streamText:", err);
            // Nếu lỗi xảy ra trong quá trình stream, override phần lỗi gửi lên
            return "Hệ thống đang quá tải, vui lòng thử lại sau.";
          },
        })
      );
    },
  });

  return stream;
}
