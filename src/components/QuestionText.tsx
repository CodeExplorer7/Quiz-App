import React, { ReactNode } from "react";

export const QuestionText = (props: {question: {
  questionText: string;
  answerOptions: {
      answerText: string;
      isCorrect: boolean;
  }[];
}}) => {
  return <div className="question-text">{props.question.questionText}</div>;
};
