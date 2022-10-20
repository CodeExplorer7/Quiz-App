import React from "react";


export const Statusbar = (props: { score: number ; questions: string | any[]; status: string; }) => {
    return (<div className="statusbar">Так как Вы набрали {props.score} ответов из {props.questions.length}, Ваш статус - {props.status}</div>);
};