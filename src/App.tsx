import React, {useState} from "react";
import './App.css';



const App = function () {
  const questions = [
    {
      questionText: 'Столица США?',
      answerOptions: [
        { answerText: 'Бостон', isCorrect: false },
        { answerText: 'Мадрид', isCorrect: false },
        { answerText: 'Краснодар', isCorrect: false },
        { answerText: 'Вашингтон', isCorrect: true }
      ]
    },
    {
      questionText: 'В каком году был изобретён первый iPhone?',
      answerOptions: [
        { answerText: '2001', isCorrect: false },
        { answerText: '2004', isCorrect: false },
        { answerText: '2007', isCorrect: true },
        { answerText: '2011', isCorrect: false }
      ]
    },
    {
      questionText: 'Сколько л/с в Т34?',
      answerOptions: [
        { answerText: 'около 200', isCorrect: false },
        { answerText: 'около 700', isCorrect: false },
        { answerText: 'около 4000', isCorrect: false },
        { answerText: 'около 500', isCorrect: true }
      ]
    },
    {
      questionText: 'В каком году началась первая мировая война?',
      answerOptions: [
        { answerText: '1914', isCorrect: true },
        { answerText: '1900', isCorrect: false },
        { answerText: '1899', isCorrect: false },
        { answerText: '1931', isCorrect: false }
      ]
    }
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)

  const handleAnswerOptionClick = (isCorrect: boolean) => {

    if (isCorrect) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1

    if (nextQuestion < questions.length) {

      setCurrentQuestion(nextQuestion)

    } else {

      setShowScore(true)

    }

  }

  const handleRefresh = () => {

    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)

  }


  let status = (score < questions.length) ? 'Не оч((': 'Красава';

  return (
    <div className="app" >
      {
        showScore
          ?
          <div className="section__score">
            <div>Правильных ответов {score} из {questions.length}</div>
            <div className="status">Так как Вы набрали {score} ответов из {questions.length}, Ваш статус - {status}</div>
            <button className="refresh__btn" onClick={handleRefresh} >Попробовать еще раз</button>
            </div>
            :  <div className='quizz'>
              <div className='question-section'>
                <div className="question-count">
                  <span>Вопрос {currentQuestion + 1} </span> /{questions.length}
                </div>
                <div className="question-text">{questions[currentQuestion].questionText}
                </div>
                <div className="answer-section">
                  {questions[currentQuestion].answerOptions.map(item =>
                  (<button

                    onClick={() => handleAnswerOptionClick(item.isCorrect)}

                  >{item.answerText}</button>
                  )
                )}
                </div>
              </div>
      
            </div>
}</div>
      

  );
}


export {App};


