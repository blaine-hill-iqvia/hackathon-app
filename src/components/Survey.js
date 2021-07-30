import React, { useState } from 'react';

export default function Survey() {
  const questions =[
    {
      questionText: 'What is your gender?',
      answerOptions: [
        { answerText: 'Male', score: 1 },
        { answerText: 'Female', score: 1},
        { answerText: 'Other', score: 1},
      ],
    },
    {
      questionText: 'Please indicate your ethnicity.',
      answerOptions: [
        { answerText: 'Caucasian', score: 1},
        { answerText: 'Latino/Hispanic', score: 2},
        { answerText: 'Middle Eastern', score: 3},
        { answerText: 'African', score: 2},
        { answerText: 'Carribean', score: 2},
        { answerText: 'South Asian', score: 3},
        { answerText: 'East Asian', score: 3},
        { answerText: 'Mixed', score: 2},
        { answerText: 'Other', score: 1},
      ],
    },
    {
      questionText: 'Please select your age.',
      answerOptions: [
        { answerText: 'Under 18', score: 0},
        { answerText: '18-24', score: 1},
        { answerText: '25-34', score: 2},
        { answerText: '35-44', score: 2},
        { answerText: '45-54', score: 3},
        { answerText: '55-64', score: 2},
        { answerText: 'Over 64', score: 1},
      ],
    },
    {
      questionText: 'What is your marital status?',
      answerOptions: [
        { answerText: 'Single (never married)', score: 1},
        { answerText: 'Married, or in a domestic partnership', score: 1},
        { answerText: 'Widowed', score: 2},
        { answerText: 'Divorced', score: 3},
        { answerText: 'Separated', score: 2},
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [userScore, setUserScore] = useState(0);

  const handleAnswerOptionClick = (score) => {
    setUserScore(userScore + score);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  return (
      <div className='app'>
        {showScore? (
          <div className='score-section'>
            You scored {userScore}.
          </div>
        ): (
          <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>{questions.length}
            </div>
            <div className='question-text'>
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button onClick={() => handleAnswerOptionClick(answerOption.score)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
          </>
        )}
      </div>
    )
    
  
  ;
}