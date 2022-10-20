import React from "react";

export const AnswerSection = (props: any) => {
  return (
    <div className="answer-section">
      {props.questions.answerOptions.map(
        (item: {
          isCorrect: any;
          answerText:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | React.ReactFragment
            | React.ReactPortal
            | null
            | undefined;  
        }) => (
          <button onClick={() => props.handleAnswerOptionClick(item.isCorrect)}>
            {item.answerText}
          </button>
        )
      )}
    </div>
  );
};
