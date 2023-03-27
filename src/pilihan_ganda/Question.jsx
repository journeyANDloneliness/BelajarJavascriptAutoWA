
import React, { useState } from "react";


const Question = ({ level, topic, question, choices, answer, hint }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showHint, setShowHint] = useState(false);

  const handleAnswerSelect = (choice) => {
    if (selectedAnswer === choice) {
      setSelectedAnswer(null);
    } else {
      setSelectedAnswer(choice);
    }
  };

  const handleHintToggle = () => {
    setShowHint(!showHint);
  };

  return (
    <div className="question">
      <div className="question-info">
        <span className="question-level">{level}</span>
        <span className="question-topic">{topic}</span>
      </div>
      <p className="question-text">{question}</p>
      <div className="choices">
        {choices.map((choice, index) => (
          <button
            key={index}
            className={`choice ${
              selectedAnswer === choice ? "selected" : ""
            }`}
            onClick={() => handleAnswerSelect(choice)}
          >
            {choice}
          </button>
        ))}
      </div>
      <div className="actions">
        <button className="hint-toggle" onClick={handleHintToggle}>
          Hint
        </button>
        {selectedAnswer !== null && (
          <p className={`result ${selectedAnswer === answer ? "correct" : "incorrect"}`}>
            {selectedAnswer === answer ? "Correct!" : "Incorrect."}
          </p>
        )}
      </div>
      {showHint && <p className="hint">{hint}</p>}
    </div>
  );
};

export default Question;
