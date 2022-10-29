import React from "react";
import { RefreshBtn } from "./RefreshBtn";
import { Result } from "./Result";
import { ScoreLeftToWin } from "./ScoreLeftToWin";
import { Statusbar } from "./Statusbar";

export const SectionScoreAndScoreLeftToWin = (props: {
  ScoreLeftToWin: number;
  
  score: number;
  questions: string | Array <any> ;
  question: Array<any>;
  status: string;
  handleRefresh: () => void;
}) => {
  return (
    <div className="section__score">
            <Result score={props.score} questions={props.questions}  />
            <Statusbar score={props.score} question={props.question} status={props.status} />
            <ScoreLeftToWin question={props.question} ScoreLeftToWin={props.ScoreLeftToWin} />
            <RefreshBtn handleRefresh={props.handleRefresh} />
          </div>
  );
};