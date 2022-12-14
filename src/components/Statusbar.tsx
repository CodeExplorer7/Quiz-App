import React from "react";

export const Statusbar = (props: {
  score: number;
  question: Array<any>;
  status: string;
}) => {
  return (
    <div className="statusbar">
      Так как Вы набрали {props.score} ответов из {props.question.length}, Ваш
      статус - {props.status}
    </div>
  );
};
