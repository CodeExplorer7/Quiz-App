import React from "react";

export const Result = (props: { score: number; questions: string | Array <any> }) => {
  return (
    <div className="result">
      Правильных ответов {props.score} из {props.questions.length}
    </div>
  );
};
