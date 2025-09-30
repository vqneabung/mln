'use client'

import { useState } from 'react';
import QuizQuestion from './QuizQuestion';
import QuizResult from './QuizResult';

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Kiểu nhà nước đầu tiên trong lịch sử là?",
    options: [
      "Nhà nước chủ nô",
      "Nhà nước phong kiến",
      "Nhà nước tư sản",
      "Nhà nước XHCN"
    ],
    correctAnswer: 0,
    explanation: "Nhà nước chủ nô là kiểu nhà nước đầu tiên trong lịch sử loài người, xuất hiện khi xã hội chuyển từ chế độ cộng sản nguyên thủy sang xã hội có giai cấp."
  },
  {
    id: 2,
    question: "Nguồn gốc ra đời của nhà nước?",
    options: [
      "Để điều hoà mâu thuẫn giai cấp",
      "Do mâu thuẫn giai cấp không thể điều hoà được",
      "Nhà nước ra đời để quản lý xã hội",
      "Cả ba đáp án trên"
    ],
    correctAnswer: 1,
    explanation: "Nhà nước ra đời do mâu thuẫn giai cấp gay gắt không thể điều hoà được, là sản phẩm của xã hội phân chia giai cấp."
  },
  {
    id: 3,
    question: "Bản chất giai cấp của nhà nước nguyên nghĩa, theo quan điểm của chủ nghĩa Mác-Lênin?",
    options: [
      "Nhà nước đứng trên các giai cấp",
      "Nhà nước chung cho mọi giai cấp",
      "Nhà nước của giai cấp thống trị",
      "Cả ba đáp án trên"
    ],
    correctAnswer: 2,
    explanation: "Bản chất của nhà nước là tổ chức chính trị của giai cấp thống trị về mặt kinh tế để bảo vệ trật tự hiện hành và đàn áp các giai cấp khác."
  },
  {
    id: 4,
    question: "Đặc trưng cơ bản của nhà nước là?",
    options: [
      "Nhà nước quản lý dân cư trên một vùng lãnh thổ nhất định",
      "Nhà nước xây dựng một bộ máy quyền lực chuyên nghiệp mang tính cưỡng chế",
      "Nhà nước hình thành hệ thống thuế khoá để duy trì và tăng cường bộ máy cai trị",
      "Bao gồm cả ba đặc trưng trên"
    ],
    correctAnswer: 3,
    explanation: "Nhà nước có ba đặc trưng cơ bản: quản lý theo lãnh thổ, có bộ máy quyền lực cưỡng chế đặc biệt, và có hệ thống thuế khóa."
  },
  {
    id: 5,
    question: "Về thực chất, nhà nước của xã hội có giai cấp thành lập nên một bộ máy quyền lực chuyên nghiệp nhằm mục đích gì?",
    options: [
      "Giúp nhà nước quản lý xã hội để bảo vệ quyền thống trị của giai cấp thống trị",
      "Bảo vệ tổ quốc và độc lập dân tộc",
      "Cân bằng cán cân quân sự quốc tế với các nước khác",
      "Thôn tính đất đai và chủ quyền đối với các quốc gia khác"
    ],
    correctAnswer: 0,
    explanation: "Bộ máy quyền lực của nhà nước được thành lập chủ yếu để bảo vệ quyền thống trị và lợi ích của giai cấp thống trị."
  },
  {
    id: 6,
    question: "Theo quan điểm của triết học Mác-Lênin, chức năng cơ bản của nhà nước xã hội có giai cấp là?",
    options: [
      "Bảo đảm an sinh xã hội",
      "Thống trị giai cấp trên mọi mặt của đời sống xã hội",
      "Xây dựng hệ thống luật pháp",
      "Xây dựng thang bậc chính trị"
    ],
    correctAnswer: 1,
    explanation: "Chức năng cơ bản của nhà nước trong xã hội có giai cấp là thống trị giai cấp, duy trì và bảo vệ lợi ích của giai cấp thống trị."
  },
  {
    id: 7,
    question: "Ngày nay, đâu là nguyên nhân cơ bản khiến các quốc gia phải mở rộng quan hệ đối ngoại?",
    options: [
      "Quá trình toàn cầu hóa trong mọi lĩnh vực của đời sống",
      "Khan hiếm năng lượng",
      "Chủ nghĩa tư bản phát triển",
      "Khủng hoảng lương thực"
    ],
    correctAnswer: 0,
    explanation: "Quá trình toàn cầu hóa làm cho các quốc gia phải mở rộng quan hệ đối ngoại để hội nhập và phát triển."
  },
  {
    id: 8,
    question: "Theo quan điểm của chủ nghĩa Mác-Lênin, xét về sự khác biệt với các nhà nước khác trong lịch sử, thì nhà nước vô sản là?",
    options: [
      "Nhà nước nửa nhà nước",
      "Nhà nước đặc biệt",
      "Nhà nước kiểu mới",
      "Cả 3 đáp án trên đều đúng"
    ],
    correctAnswer: 3,
    explanation: "Nhà nước vô sản vừa là nhà nước nửa nhà nước, vừa đặc biệt, vừa là kiểu mới so với các loại nhà nước trước đây."
  },
  {
    id: 9,
    question: "Mô hình nào được xem là nhà nước chuyên chính vô sản đầu tiên trong lịch sử nhân loại?",
    options: [
      "Nhà nước liên bang xô viết (Liên Xô)",
      "Công xã Pa-ri",
      "Xô viết nghệ tĩnh",
      "Cả ba đáp án trên đều đúng"
    ],
    correctAnswer: 1,
    explanation: "Công xã Pa-ri (1871) được Marx và Engels đánh giá là hình thức chính trị đầu tiên của nhà nước chuyên chính vô sản."
  },
  {
    id: 10,
    question: "Đặc điểm của nhà nước vô sản?",
    options: [
      "Tổ chức quyền lực của nhân dân. Có chức năng tổ chức và xây dựng là chủ yếu",
      "Là tổ chức quyền lực của giai cấp mạnh nhất trong xã hội",
      "Có chức năng trấn áp là chủ yếu",
      "Bao gồm đáp án B và C"
    ],
    correctAnswer: 0,
    explanation: "Nhà nước vô sản là tổ chức quyền lực của nhân dân lao động, có chức năng tổ chức xây dựng xã hội mới là chủ yếu."
  },
  {
    id: 11,
    question: "Theo quan điểm của chủ nghĩa Mác-Lênin, cách mạng xã hội là?",
    options: [
      "Sự biến đổi có tính chất bước ngoặt và căn bản về chất trong toàn bộ các lĩnh vực của đời sống xã hội",
      "Việc lật đổ một chế độ chính trị đã lỗi thời, thiết lập một chế độ chính trị tiến bộ hơn",
      "Sự thay đổi về hình thái kinh tế - xã hội",
      "Cả 3 đáp án trên đều đúng"
    ],
    correctAnswer: 3,
    explanation: "Cách mạng xã hội bao gồm tất cả các khía cạnh: thay đổi căn bản toàn diện, lật đổ chế độ cũ và chuyển đổi hình thái kinh tế-xã hội."
  },
  {
    id: 12,
    question: "Lịch sử xã hội loài người đã trải qua mấy cuộc cách mạng xã hội lớn?",
    options: [
      "Một",
      "Hai", 
      "Ba",
      "Bốn"
    ],
    correctAnswer: 3,
    explanation: "Lịch sử đã trải qua 4 cuộc cách mạng xã hội lớn: từ cộng sản nguyên thủy lên chế độ có giai cấp, lên phong kiến, lên tư bản chủ nghĩa, và lên xã hội chủ nghĩa."
  },
  {
    id: 13,
    question: "Nguyên nhân cơ bản của cách mạng xã hội?",
    options: [
      "Mâu thuẫn giữa lực lượng sản xuất và quan hệ sản xuất",
      "Mâu thuẫn giữa cơ sở hạ tầng và kiến trúc thượng tầng",
      "Mâu thuẫn giữa giai cấp thống trị và giai cấp bị trị",
      "Cả ba đáp án trên"
    ],
    correctAnswer: 0,
    explanation: "Nguyên nhân cơ bản và sâu xa nhất của cách mạng xã hội là mâu thuẫn giữa lực lượng sản xuất phát triển và quan hệ sản xuất lạc hậu."
  },
  {
    id: 14,
    question: "Cuộc cách mạng tư sản được đánh giá là triệt để nhất xảy ra ở quốc gia nào?",
    options: [
      "Mỹ",
      "Anh",
      "Pháp",
      "Đức"
    ],
    correctAnswer: 2,
    explanation: "Cách mạng tư sản Pháp (1789) được đánh giá là triệt để nhất vì đã phá bỏ hoàn toàn chế độ phong kiến và thiết lập nền cộng hóa dân chủ."
  },
  {
    id: 15,
    question: "Quốc gia nào ở vùng Ca-ri-bê đang thực hiện thành công cách mạng XHCN?",
    options: [
      "Chi-lê",
      "Cô-lôm-bi-a", 
      "Hôn-đu-rát",
      "Cu-ba"
    ],
    correctAnswer: 3,
    explanation: "Cu-ba là quốc gia duy nhất ở vùng Ca-ri-bê đang thực hiện thành công con đường xây dựng chủ nghĩa xã hội."
  },
  {
    id: 16,
    question: "Theo C. Mác và Ph. Ăngghen thì cách mạng XHCN chỉ có thể xảy ra và thành công ở đâu?",
    options: [
      "Tất cả các nước trên thế giới",
      "Các nước tư bản phát triển",
      "Các nước thuộc địa",
      "Các nước tư bản phát triển trung bình"
    ],
    correctAnswer: 1,
    explanation: "Theo quan điểm ban đầu của Marx và Engels, cách mạng xã hội chủ nghĩa sẽ xảy ra đầu tiên ở các nước tư bản phát triển nhất."
  },
  {
    id: 17,
    question: "Sau khi phân tích về quy luật phát triển không đồng đều của các nước đế quốc đầu thế kỷ XX, Lênin đã chỉ ra rằng cách mạng XHCN có thể xảy ra ở đâu?",
    options: [
      "Ở các nước tư bản phát triển nhất",
      "Ở các nước tư bản trung bình, thậm chí ở các nước chưa qua sự phát triển tư bản chủ nghĩa",
      "Ở các nước thuộc địa",
      "Đồng loạt ở tất cả các nước trên thế giới"
    ],
    correctAnswer: 1,
    explanation: "Lenin đã phát triển lý thuyết về khả năng thắng lợi của cách mạng xã hội chủ nghĩa ở từng nước riêng lẻ, kể cả những nước chưa phát triển tư bản chủ nghĩa đầy đủ."
  },
  {
    id: 18,
    question: "Cuộc cách mạng xã hội nào được xem là mở đầu sự ra đời của một chế độ xã hội mới của nhân loại, xã hội XHCN?",
    options: [
      "Cách mạng tháng 10 Nga",
      "Cách mạng tháng 8-1945 ở Việt Nam",
      "Cách mạng Tân Hợi ở Trung Quốc",
      "Cách mạng tư sản Pháp"
    ],
    correctAnswer: 0,
    explanation: "Cách mạng tháng Mười Nga năm 1917 là cuộc cách mạng xã hội chủ nghĩa đầu tiên thành công, mở đầu kỷ nguyên mới của nhân loại."
  },
  {
    id: 19,
    question: "Hình thức nhà nước cộng hòa xuất hiện đầu tiên ở đâu?",
    options: [
      "Hy Lạp",
      "Ấn Độ",
      "Ai Cập", 
      "La Mã"
    ],
    correctAnswer: 3,
    explanation: "Hình thức nhà nước cộng hòa xuất hiện đầu tiên ở La Mã cổ đại (khoảng thế kỷ VI trước Công nguyên)."
  },
  {
    id: 20,
    question: "Hình thức nhà nước của nước Pháp hiện nay?",
    options: [
      "Quân chủ lập hiến",
      "Cộng hòa",
      "Cộng hòa liên bang",
      "Dân chủ nhân dân"
    ],
    correctAnswer: 1,
    explanation: "Pháp hiện nay là nước cộng hòa với hình thức chính phủ bán tổng thống (Cộng hòa Pháp lần thứ V)."
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Tính điểm
      let correctCount = 0;
      selectedAnswers.forEach((answer, index) => {
        if (answer === questions[index].correctAnswer) {
          correctCount++;
        }
      });
      setScore(correctCount);
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResult(false);
    setScore(0);
  };

  const isAnswered = selectedAnswers[currentQuestion] !== undefined;
  const canGoNext = isAnswered;

  if (showResult) {
    return (
      <QuizResult
        score={score}
        totalQuestions={questions.length}
        questions={questions}
        selectedAnswers={selectedAnswers}
        onRetry={handleRetry}
      />
    );
  }

  return (
    <section id="quiz" className="quiz-section">
      <div className="quiz-container">
        <div className="quiz-header">
          <h2 className="quiz-title">Quiz Kiến thức</h2>
          <p className="quiz-subtitle">
            Kiểm tra hiểu biết của bạn về lý thuyết giai cấp với 20 câu hỏi chi tiết
          </p>
        </div>

        <QuizQuestion
          question={questions[currentQuestion]}
          currentIndex={currentQuestion}
          totalQuestions={questions.length}
          selectedAnswer={selectedAnswers[currentQuestion]}
          onAnswerSelect={handleAnswerSelect}
          onNext={handleNext}
          onPrevious={handlePrevious}
          canGoNext={canGoNext}
          canGoPrevious={currentQuestion > 0}
          isLastQuestion={currentQuestion === questions.length - 1}
        />
      </div>
    </section>
  );
}