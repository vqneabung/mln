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
    question: "Theo V.I. Lênin, giai cấp được định nghĩa dựa trên yếu tố nào chủ yếu?",
    options: [
      "Mức thu nhập và lối sống",
      "Địa vị trong hệ thống sản xuất xã hội",
      "Trình độ học vấn và văn hóa",
      "Nguồn gốc gia đình và dòng họ"
    ],
    correctAnswer: 1,
    explanation: "Giai cấp được định nghĩa chủ yếu dựa trên địa vị của họ trong hệ thống sản xuất xã hội, quan hệ với tư liệu sản xuất và vai trò trong tổ chức lao động xã hội."
  },
  {
    id: 2,
    question: "Nguyên nhân sâu xa của sự xuất hiện giai cấp là gì?",
    options: [
      "Sự khác biệt về năng lực cá nhân",
      "Sự phát triển của lực lượng sản xuất và xuất hiện 'của dư'",
      "Chiến tranh và xung đột giữa các bộ tộc",
      "Sự khác biệt về trí tuệ và học thức"
    ],
    correctAnswer: 1,
    explanation: "Sự phát triển của lực lượng sản xuất làm tăng năng suất lao động, xuất hiện 'của dư', tạo khả năng cho một tập đoàn chiếm đoạt lao động của tập đoàn khác."
  },
  {
    id: 3,
    question: "Nguyên nhân trực tiếp dẫn đến sự ra đời của giai cấp là gì?",
    options: [
      "Sự phân công lao động xã hội",
      "Xuất hiện chế độ tư hữu về tư liệu sản xuất",
      "Phát triển thương mại và trao đổi",
      "Hình thành nhà nước và luật pháp"
    ],
    correctAnswer: 1,
    explanation: "Xuất hiện chế độ tư hữu về tư liệu sản xuất là nguyên nhân trực tiếp dẫn đến sự phân chia xã hội thành các giai cấp đối kháng."
  },
  {
    id: 4,
    question: "Theo lý thuyết Mác-xít, nhà nước ra đời khi nào?",
    options: [
      "Khi con người bắt đầu sống định cư",
      "Khi xã hội phân chia thành các giai cấp đối kháng",
      "Khi xuất hiện tôn giáo và tín ngưỡng",
      "Khi phát minh ra chữ viết"
    ],
    correctAnswer: 1,
    explanation: "Nhà nước ra đời khi xã hội phân chia thành các giai cấp đối kháng, như một công cụ để giai cấp thống trị duy trì quyền lực của mình."
  },
  {
    id: 5,
    question: "Bản chất của nhà nước theo quan điểm Mác-xít là gì?",
    options: [
      "Tổ chức đại diện cho toàn thể nhân dân",
      "Cơ quan thống trị của giai cấp có lợi ích chung",
      "Máy móc trấn áp của giai cấp thống trị",
      "Tổ chức quản lý xã hội công bằng"
    ],
    correctAnswer: 2,
    explanation: "Bản chất của nhà nước là máy móc trấn áp của giai cấp thống trị, công cụ để một giai cấp áp bức giai cấp khác."
  },
  {
    id: 6,
    question: "Đặc trưng nào KHÔNG phải là đặc trưng của nhà nước?",
    options: [
      "Tổ chức quyền lực theo nguyên tắc lãnh thổ",
      "Có bộ máy quyền lực công cộng đặc biệt",
      "Dựa trên mối quan hệ huyết thống",
      "Có quyền thu thuế và phát hành tiền tệ"
    ],
    correctAnswer: 2,
    explanation: "Nhà nước tổ chức theo nguyên tắc lãnh thổ chứ không phải dựa trên mối quan hệ huyết thống như các tổ chức thị tộc cũ."
  },
  {
    id: 7,
    question: "Cách mạng xã hội về bản chất là gì?",
    options: [
      "Thay đổi hình thức chính quyền",
      "Cải cách kinh tế và xã hội từ từ",
      "Thay thế chế độ xã hội cũ bằng chế độ mới tiến bộ hơn",
      "Thay đổi lãnh đạo nhà nước"
    ],
    correctAnswer: 2,
    explanation: "Cách mạng xã hội về bản chất là việc thay thế toàn bộ chế độ xã hội cũ lạc hậu bằng chế độ xã hội mới tiến bộ hơn."
  },
  {
    id: 8,
    question: "Nguyên nhân gốc rễ của cách mạng xã hội là gì?",
    options: [
      "Xung đột chính trị giữa các nhóm",
      "Mâu thuẫn giữa lực lượng sản xuất và quan hệ sản xuất",
      "Bất công trong phân phối thu nhập",
      "Khủng hoảng kinh tế tài chính"
    ],
    correctAnswer: 1,
    explanation: "Nguyên nhân gốc rễ của cách mạng xã hội là mâu thuẫn giữa lực lượng sản xuất đang phát triển và quan hệ sản xuất cũ đã lạc hậu."
  },
  {
    id: 9,
    question: "Điều kiện khách quan của cách mạng xã hội bao gồm?",
    options: [
      "Chỉ có khủng hoảng kinh tế",
      "Giai cấp thống trị khủng hoảng và quần chúng khổ sở",
      "Chỉ có sự bất mãn của nhân dân",
      "Chỉ có sự yếu kém của chính quyền"
    ],
    correctAnswer: 1,
    explanation: "Điều kiện khách quan bao gồm cả khủng hoảng của giai cấp thống trị và sự khổ sở, tích cực hoạt động tăng cao của quần chúng nhân dân."
  },
  {
    id: 10,
    question: "Nhân tố chủ quan trong cách mạng xã hội là gì?",
    options: [
      "Kinh tế phát triển mạnh",
      "Đảng cách mạng và ý thức giai cấp của quần chúng",
      "Hỗ trợ từ các nước bên ngoài",
      "Khủng hoảng của giai cấp thống trị"
    ],
    correctAnswer: 1,
    explanation: "Nhân tố chủ quan là sự có mặt của đảng cách mạng và ý thức giai cấp giác ngộ cao của quần chúng nhân dân."
  },
  {
    id: 11,
    question: "Mối quan hệ giữa giai cấp - dân tộc - nhân loại có đặc điểm gì?",
    options: [
      "Hoàn toàn đối kháng với nhau",
      "Độc lập tuyệt đối với nhau",
      "Có mối quan hệ biện chứng, thống nhất và đấu tranh",
      "Luôn luôn hòa hợp, không mâu thuẫn"
    ],
    correctAnswer: 2,
    explanation: "Mối quan hệ giữa ba cộng đồng này mang tính biện chứng, vừa thống nhất vừa có đấu tranh, mâu thuẫn trong điều kiện lịch sử cụ thể."
  },
  {
    id: 12,
    question: "Lợi ích nào là nền tảng chung cho sự tồn tại của giai cấp và dân tộc?",
    options: [
      "Lợi ích giai cấp",
      "Lợi ích dân tộc",
      "Lợi ích nhân loại",
      "Lợi ích cá nhân"
    ],
    correctAnswer: 2,
    explanation: "Lợi ích nhân loại là nền tảng chung, là điều kiện tồn tại và phát triển của cả giai cấp và dân tộc."
  },
  {
    id: 13,
    question: "Trong điều kiện nào giai cấp công nhân có lợi ích thống nhất với dân tộc?",
    options: [
      "Khi đấu tranh giành độc lập dân tộc",
      "Khi xây dựng chủ nghĩa xã hội",
      "Cả hai trường hợp trên",
      "Không bao giờ thống nhất"
    ],
    correctAnswer: 2,
    explanation: "Giai cấp công nhân có lợi ích thống nhất với dân tộc cả trong đấu tranh giành độc lập dân tộc và xây dựng chủ nghĩa xã hội."
  },
  {
    id: 14,
    question: "Xu hướng phát triển của cách mạng xã hội hiện nay là gì?",
    options: [
      "Chỉ có cách mạng bạo lực",
      "Chỉ có cách mạng hòa bình",
      "Đa dạng hóa con đường cách mạng theo điều kiện cụ thể",
      "Không còn cách mạng xã hội"
    ],
    correctAnswer: 2,
    explanation: "Cách mạng xã hội hiện nay có xu hướng đa dạng hóa, các dân tộc có thể chọn con đường phù hợp với điều kiện cụ thể của mình."
  },
  {
    id: 15,
    question: "Tác động nào ảnh hưởng đến cách mạng xã hội hiện nay?",
    options: [
      "Cách mạng khoa học công nghệ",
      "Toàn cầu hóa",
      "Các vấn đề toàn cầu",
      "Tất cả các yếu tố trên"
    ],
    correctAnswer: 3,
    explanation: "Cách mạng xã hội hiện nay chịu ảnh hưởng tổng hợp của cách mạng KHCN, toàn cầu hóa và các vấn đề toàn cầu."
  },
  {
    id: 16,
    question: "Đặc điểm của nhà nước xã hội chủ nghĩa là gì?",
    options: [
      "Nhà nước của giai cấp tư sản",
      "Nhà nước của toàn dân do giai cấp công nhân lãnh đạo",
      "Nhà nước không có giai cấp",
      "Nhà nước của giới trí thức"
    ],
    correctAnswer: 1,
    explanation: "Nhà nước xã hội chủ nghĩa là nhà nước của toàn dân nhưng do giai cấp công nhân làm lãnh đạo thông qua đảng cộng sản."
  },
  {
    id: 17,
    question: "Quá trình tiêu vong của nhà nước xảy ra khi nào?",
    options: [
      "Ngay sau khi cách mạng thành công",
      "Khi xây dựng được chủ nghĩa cộng sản hoàn chỉnh",
      "Khi kinh tế phát triển cao",
      "Khi có dân chủ tuyệt đối"
    ],
    correctAnswer: 1,
    explanation: "Nhà nước sẽ tiêu vong khi xã hội phát triển đến giai đoạn cộng sản hoàn chỉnh, không còn giai cấp và mâu thuẫn giai cấp."
  },
  {
    id: 18,
    question: "Hình thức cách mạng xã hội phụ thuộc vào yếu tố nào?",
    options: [
      "Ý muốn chủ quan của lãnh đạo",
      "Điều kiện lịch sử cụ thể và tương quan lực lượng",
      "Truyền thống văn hóa dân tộc",
      "Ảnh hưởng của các nước khác"
    ],
    correctAnswer: 1,
    explanation: "Hình thức cách mạng được quyết định bởi điều kiện lịch sử cụ thể và tương quan lực lượng giữa các giai cấp trong xã hội."
  },
  {
    id: 19,
    question: "Vai trò của quần chúng nhân dân trong cách mạng xã hội là gì?",
    options: [
      "Chỉ là người ủng hộ thụ động",
      "Là lực lượng quyết định thành công của cách mạng",
      "Không có vai trò quan trọng",
      "Chỉ tham gia khi được huy động"
    ],
    correctAnswer: 1,
    explanation: "Quần chúng nhân dân là lực lượng quyết định thành công của cách mạng xã hội, là chủ thể thực hiện cách mạng."
  },
  {
    id: 20,
    question: "Mục tiêu cuối cùng của cách mạng xã hội là gì?",
    options: [
      "Thay đổi chính quyền",
      "Cải thiện đời sống vật chất",
      "Xây dựng xã hội không giai cấp, bình đẳng và tự do",
      "Phát triển kinh tế nhanh chóng"
    ],
    correctAnswer: 2,
    explanation: "Mục tiêu cuối cùng của cách mạng xã hội là xây dựng xã hội cộng sản - xã hội không có giai cấp, không có áp bức bóc lột, con người được tự do và bình đẳng."
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