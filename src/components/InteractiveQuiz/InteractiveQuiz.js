// src/components/InteractiveQuiz.js
import React, { useState } from 'react';
import './InteractiveQuiz.css';

const InteractiveQuiz = () => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [completed, setCompleted] = useState(false);

  const questions = [
    { question: "How many servings of fruits and vegetables do you eat daily?", options: [1, 3, 5, 7], answer: 5 },
    { question: "How often do you exercise per week?", options: [0, 1, 3, 5], answer: 3 },
    { question: "How many hours of sleep do you get nightly?", options: [4, 6, 8, 10], answer: 8 }
  ];

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setCompleted(true);
    }
  };

  return (
    <div className="interactive-quiz">
      <h2>Health Assessment Quiz</h2>
      {!completed ? (
        <div>
          <p>{questions[currentQuestion].question}</p>
          {questions[currentQuestion].options.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(option)}>{option}</button>
          ))}
        </div>
      ) : (
        <p>Your score: {score} / {questions.length}</p>
      )}
    </div>
  );
};

export default InteractiveQuiz;
