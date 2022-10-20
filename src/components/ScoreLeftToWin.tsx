import React from "react";

export const ScoreLeftToWin = (props: { questions: string | any[]; ScoreLeftToWin: number  }) => {
    return (<div className="score-left-to-win">Чтобы набрать максимальное количество правильных ответов (в данном quiz - {props.questions.length}) Вам необходимо дать еще {props.ScoreLeftToWin} правильных ответов </div>);
};