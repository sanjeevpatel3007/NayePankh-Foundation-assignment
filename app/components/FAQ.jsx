import React, { useState } from 'react';

const FAQ = () => {
  // Sample FAQ Data
  const faqs = [
    {
      question: "What is the purpose of this donation site?",
      answer: "This site is designed to connect donors with various charitable organizations and facilitate donations.",
    },
    {
      question: "How do I make a donation?",
      answer: "To make a donation, navigate to the donation section, select a charity, and choose your donation amount.",
    },
    {
      question: "Are my donations tax-deductible?",
      answer: "Yes, donations made through this site are typically tax-deductible. Please consult with your tax advisor for more information.",
    },
    {
      question: "Can I donate anonymously?",
      answer: "Yes, you can choose to donate anonymously during the donation process.",
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept various payment methods, including credit cards, PayPal, and bank transfers.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-4 max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
      <p className="mt-2 text-gray-600">Find answers to your questions here.</p>

      <div className="mt-6">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 border-b pb-4">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFAQ(index)}>
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <span className="text-2xl text-blue-600">{openIndex === index ? '-' : '+'}</span>
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
