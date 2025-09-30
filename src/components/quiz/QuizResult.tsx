'use client'

import { Question } from './Quiz';

interface QuizResultProps {
  score: number;
  totalQuestions: number;
  questions: Question[];
  selectedAnswers: number[];
  onRetry: () => void;
}

export default function QuizResult({
  score,
  totalQuestions,
  questions,
  selectedAnswers,
  onRetry,
}: QuizResultProps) {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getScoreMessage = () => {
    if (percentage >= 90) return "Xuất sắc! Bạn đã nắm vững kiến thức";
    if (percentage >= 80) return "Tốt! Bạn có hiểu biết khá tốt";
    if (percentage >= 70) return "Khá! Bạn cần ôn tập thêm một chút";
    if (percentage >= 60) return "Trung bình! Hãy học thêm để cải thiện";
    return "Cần cải thiện! Hãy ôn tập kỹ hơn";
  };

  const getScoreColor = () => {
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="quiz-result">
      <div className="result-header">
        <div className="trophy-icon">🏆</div>
        <h2 className="result-title">Kết quả Quiz</h2>
        <p className="result-message">{getScoreMessage()}</p>
      </div>

      <div className="score-display">
        <div className={`score-number ${getScoreColor()}`}>
          {score}/{totalQuestions}
        </div>
        <div className="score-percentage">
          Điểm số: {percentage}%
        </div>
        {percentage < 50 && (
          <button className="retry-button" onClick={onRetry}>
            Làm lại thiên
          </button>
        )}
      </div>

      <div className="result-details">
        <h3 className="details-title">Chi tiết kết quả:</h3>
        <div className="answers-review">
          {questions.map((question, index) => {
            const userAnswer = selectedAnswers[index];
            const isCorrect = userAnswer === question.correctAnswer;
            
            return (
              <div key={question.id} className={`answer-item ${isCorrect ? 'correct' : 'incorrect'}`}>
                <div className="answer-header">
                  <span className={`answer-icon ${isCorrect ? 'correct' : 'incorrect'}`}>
                    {isCorrect ? '✓' : '✗'}
                  </span>
                  <span className="question-title">
                    {question.question}
                  </span>
                </div>
                
                {!isCorrect && (
                  <div className="answer-details">
                    <div className="user-answer">
                      <strong>Đáp án của bạn:</strong> {question.options[userAnswer]}
                    </div>
                    <div className="correct-answer">
                      <strong>Đáp án đúng:</strong> {question.options[question.correctAnswer]}
                    </div>
                    <div className="explanation">
                      <strong>Giải thích:</strong> {question.explanation}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="result-actions">
        <button className="retry-button" onClick={onRetry}>
          Làm lại Quiz
        </button>
      </div>
    </div>
  );
}