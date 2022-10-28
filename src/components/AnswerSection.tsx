import React from "react";

export const AnswerSection = (props: {
  question: {
    questionText: string;
    answerOptions: {
      answerText: string;
      isCorrect: boolean;
    }[];
  };
  handleAnswerOptionClick(isCorrect: boolean): void;
}) => {
  return (
    <div className="answer-section">
      {props.question.answerOptions.map(
        (item: { isCorrect: boolean; answerText: string }) => (
          <button onClick={() => props.handleAnswerOptionClick(item.isCorrect)}>
            {item.answerText}
          </button>
        )
      )}
    </div>
  );
};
