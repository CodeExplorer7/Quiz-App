import React from "react";

export const QuestionCount = (props: {
  currentQuestion: number;
  question: Array<any>;
}) => {
  return (
    <div className="question-count">
      <span> Вопрос {props.currentQuestion + 1} </span> /
      {props.question.length}
    </div>
  );
};
