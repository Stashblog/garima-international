
import  { useState } from 'react';
import s from './styles.module.scss'; 

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is our company about?',
      answer: 'We are committed to providing exceptional service and innovative solutions to our clients.'
    },
    {
      question: 'How can I contact customer support?',
      answer: 'You can reach our customer support via the contact form on our website or by emailing support@company.com.'
    },
    {
      question: 'Where are you located?',
      answer: 'Our headquarters is located in Moradabad, but we serve clients worldwide.'
    },
    {
      question: 'What services do you offer?',
      answer: 'We offer a range of services including software development, consulting, and digital marketing.'
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={s.faqs + ' indent'}>
      <div className={s.title}>Frequently Asked Questions</div>
      <div className={s.faqList}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={s.faqItem}
            onClick={() => toggleAnswer(index)}
          >
            <div className={s.question}>{faq.question}</div>
            <div
              className={`${s.answer} ${activeIndex === index ? s.active : ''}`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
