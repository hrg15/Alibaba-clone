import React, { useState } from "react";
import QuestionIcon from "../Utils/QuestionIcon";

const QuestionItem = ({ title, text }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((prv) => !prv);
  };
  return (
    <details className="a-accordion open icon" onClick={handleClick}>
      <summary className="a-accordion__button font-bold md:text-4 text-3 md:py-4 md:px-4 py-2 px-3">
        <QuestionIcon />
        <span className="inline-block grow text-start text-4">{title}</span>
        <button className="a-accordion__expand">
          <svg
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            fill="currentColor"
            className={`block ${isOpen ? "open" : null}`}
          >
            <path d="M21.266 16.698a.75.75 0 0 0 1.037-1.08l-.069-.066-9.75-8.25a.75.75 0 0 0-.89-.058l-.078.058-9.75 8.25a.75.75 0 0 0 .893 1.202l.075-.056L12 8.858l9.266 7.84Z"></path>
          </svg>
        </button>
      </summary>
      <div>
        <div className="px-8 md:px-8 p-4">
          <div className="faq-wrapper__description">
            <p className="text-start">{text}</p>
          </div>
        </div>
      </div>
    </details>
  );
};

export default QuestionItem;
