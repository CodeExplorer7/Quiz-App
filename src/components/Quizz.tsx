import React from "react";
import { AnswerSection } from "./AnswerSection";
import { QuestionCount } from "./QuestionCount";
import { QuestionText } from "./QuestionText";

export const Quizz = (props: {
  handleAnswerOptionClick: (isCorrect: boolean) => void;
  currentQuestion: number;

  score: number;
  questions: Array<any>;

  handleRefresh: () => void;
}) => {
  return (
    <div className="quizz">
      <div className="question-section">
        <QuestionCount
          currentQuestion={props.currentQuestion}
          question={props.questions}
        />
        <QuestionText question={props.questions[props.currentQuestion]} />
        <AnswerSection
          question={props.questions[props.currentQuestion]}
          handleAnswerOptionClick={props.handleAnswerOptionClick}
        />
      </div>
    </div>
  );
};
