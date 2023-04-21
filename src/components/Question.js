import React, { useState } from "react";
import React, { useEffect, useState } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);
   const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code
useEffect(() => {
      const timeout = setTimeout(() => {
         setTimeRemaining(() => timeRemaining - 1);
         console.log(timeRemaining);
      }, 1000);
  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

   return () => {
         clearTimeout(timeout);
         onAnswered(false);
      };
   }, [timeRemaining]);

  const { id, prompt, answers, correctIndex } = question;

   function handleAnswer(isCorrect) {
      setTimeRemaining(10);
   }

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );

   const { id, prompt, answers, correctIndex } = question;

   return (
      <>
         <h1>Question {id}</h1>
         <h3>{prompt}</h3>
         {answers.map((answer, index) => {
            const isCorrect = index === correctIndex;
            return (
               <button key={answer} onClick={() => handleAnswer(isCorrect)}>
                  {answer}
               </button>
            );
         })}
         <h5>{timeRemaining} seconds remaining</h5>
      </>
   );
}

export default Question;
