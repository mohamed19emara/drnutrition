// src/components/FAQ.js
import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  { question: "What is a balanced diet?", answer: "A balanced diet includes a variety of nutrients in proper proportions." },
  { question: "How much water should I drink daily?", answer: "It's recommended to drink about 8 cups of water daily." },
  { question: "Can I eat carbs while losing weight?", answer: "Yes, carbs are essential, but focus on complex carbs in moderation." }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item" onClick={() => toggleFAQ(index)}>
          <p className="question">{faq.question}</p>
          {activeIndex === index && <p className="answer">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
