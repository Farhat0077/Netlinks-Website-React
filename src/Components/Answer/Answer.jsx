import "./Answer.css";
import answers from "./AnswerData";
import { useState } from "react";

function Answer() {
  const [activeIndex, setActiveIndex] = useState(null);

  function handleClick(index) {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  }

  return (
    <div className="faq-wrapper">
      <p className="faq-label">,QUESTIONS</p>
      <h1 className="faq-title">Answers to what CIOs actually ask.</h1>

      <div className="faq-list">
        {answers.map((question, index) => {
          const isOpen = activeIndex === index;
          return (
            <div key={index} className="faq-item">
              <button
                className={`collapsible ${isOpen ? "active" : ""}`}
                onClick={() => handleClick(index)}
              >
                <span className="question-text">{question.question}</span>

                <span className={`icon-circle ${isOpen ? "open" : ""}`}>
                  {isOpen ? question.iconNeg : question.PlusIcon}
                </span>
              </button>

              {isOpen && (
                <div className="content">
                  <p>{question.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Answer;
