import React, {useState} from "react";
import './App.css';
import Data from './components/Data.json';
import {Result} from './components/Result';
import {Statusbar} from './components/Statusbar';
import {RefreshBtn} from './components/RefreshBtn';
import {QuestionCount} from './components/QuestionCount';
import {QuestionText} from "./components/QuestionText";
import {AnswerSection} from "./components/AnswerSection";



export const App = () => {
  const questions = Data;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect: boolean) => {

    if (isCorrect) {
      setScore(score => score + 1);
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


  let status = (score < questions.length) ? 'Не оч((' : 'Красава';

  return (
    <div className="app">
      {showScore
        ?
        <div className="section__score">
          <Result score={score} questions={questions} />
          <Statusbar score={score} questions={questions} status={status} />
          <RefreshBtn handleRefresh={handleRefresh}/>
        </div>
        : <div className='quizz'>
          
          <div className='question-section'>
            <QuestionCount currentQuestion={currentQuestion} questions={questions}/>
            <QuestionText questions={questions[currentQuestion]}/>
            <AnswerSection questions={questions[currentQuestion]} handleAnswerOptionClick={handleAnswerOptionClick}/>
          </div>

        </div>
        }
        </div>


  );
}





