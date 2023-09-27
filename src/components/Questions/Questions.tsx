import React from "react";
import QuestionItem from "./QuestionItem";
import faq from "../../constants/FAQ";

const Questions = () => {
  return (
    <section className="faq-wrapper is-grouped">
      <h2 className="faq-wrapper__title text-start text-10 font-black">
        پرسش های شما
      </h2>
      {faq.map((item) => (
        <QuestionItem key={item.id} title={item.title} text={item.text} />
      ))}
    </section>
  );
};

export default Questions;
