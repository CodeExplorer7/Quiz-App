import React from "react";

export const QuestionCount = (props: { currentQuestion: number; questions: string | any[]; }) => {
    return (<div className="question-count">
    <span> Вопрос {props.currentQuestion + 1} </span> /{props.questions.length}
  </div>);
};