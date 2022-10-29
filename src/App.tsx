import React, { useState } from "react";
import "./App.css";
import Data from "./components/Data.json";
import { Result } from "./components/Result";
import { Statusbar } from "./components/Statusbar";
import { RefreshBtn } from "./components/RefreshBtn";
import { QuestionCount } from "./components/QuestionCount";
import { QuestionText } from "./components/QuestionText";
import { AnswerSection } from "./components/AnswerSection";
import { ScoreLeftToWin } from "./components/ScoreLeftToWin";
import { SectionScoreAndScoreLeftToWin } from "./components/SectionScoreAndScoreLeftToWin";
import { SectionScore } from "./components/SectionScore";
import { QuizzAndScoreLeftToWin } from "./components/QuizzAndScoreLeftToWin";
import { Quizz } from "./components/Quizz";

export const App = () => {
  const questions = Data;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore((score) => score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleRefresh = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  let status = score < questions.length ? "МЕГАПЛОХ" : "МЕГАХОРОШ";
  let ScoreLeft = questions.length - score;

  if (ScoreLeft > 0) {
    return (
      <div className="app">
        {showScore ? (
          <SectionScoreAndScoreLeftToWin
            score={score}
            questions={questions}
            status={status}
            handleRefresh={handleRefresh}
            question={questions}
            ScoreLeftToWin={ScoreLeft}
          />
        ) : (
          <QuizzAndScoreLeftToWin
            currentQuestion={currentQuestion}
            questions={questions}
            handleAnswerOptionClick={handleAnswerOptionClick}
            ScoreLeftToWin={ScoreLeft}
            score={score}
            handleRefresh={handleRefresh}
          />
        )}
      </div>
    );
  } else {
    return (
      <div className="app">
        {showScore ? (
          <SectionScore
            score={score}
            questions={questions}
            status={status}
            handleRefresh={handleRefresh}
            question={questions}
            ScoreLeftToWin={ScoreLeft}
          />
        ) : (
          <Quizz currentQuestion={currentQuestion}
          questions={questions}
          handleAnswerOptionClick={handleAnswerOptionClick}
          ScoreLeftToWin={ScoreLeft}
          score={score}
          handleRefresh={handleRefresh}/>
        )}
      </div>
    );
  }
};
