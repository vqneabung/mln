'use client'

import { Question } from './Quiz';

interface QuizQuestionProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  selectedAnswer?: number;
  onAnswerSelect: (answerIndex: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
  isLastQuestion: boolean;
}

export default function QuizQuestion({
  question,
  currentIndex,
  totalQuestions,
  selectedAnswer,
  onAnswerSelect,
  onNext,
  onPrevious,
  canGoNext,
  canGoPrevious,
  isLastQuestion,
}: QuizQuestionProps) {
  return (
    <div className="quiz-card">
      <div className="quiz-progress">
        <div className="progress-info">
          <span className="question-number">Câu {currentIndex + 1} / {totalQuestions}</span>
          <span className="quiz-category">
            <span className="category-icon">💡</span>
            Quiz Lý thuyết Giai cấp
          </span>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="question-content">
        <h3 className="question-text">{question.question}</h3>

        <div className="options-list">
          {question.options.map((option, index) => (
            <button
              key={index}
              className={`option-button ${selectedAnswer === index ? 'selected' : ''}`}
              onClick={() => onAnswerSelect(index)}
            >
              <span className="option-letter">
                {String.fromCharCode(65 + index)}
              </span>
              <span className="option-text">{option}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="quiz-navigation">
        <button
          className="nav-button secondary"
          onClick={onPrevious}
          disabled={!canGoPrevious}
        >
          Câu trước
        </button>
        <button
          className={`nav-button primary ${canGoNext ? '' : 'disabled'}`}
          onClick={onNext}
          disabled={!canGoNext}
        >
          {isLastQuestion ? 'Hoàn thành' : 'Câu tiếp'}
        </button>
      </div>
    </div>
  );
}