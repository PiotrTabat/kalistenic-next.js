import React from 'react';
import styled from 'styled-components';

const FAQSection = styled.section`
    background: var(--deep-blue);
    padding: 1.5rem 5%;
    margin-top: 80px;
    color: var(--text-light);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    box-sizing: border-box;

    @media (max-width: 768px) {
        gap: 1rem;
        padding: 4rem 10%;
        align-items: center;
        justify-content: center;
        display: flex;
    }
`;

const FAQTitle = styled.h2`
  font-size: 2.5rem;
  color: var(--electric-green);
  margin-bottom: 1rem;
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  padding: 0 2rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const FAQList = styled.ul`
  font-size: 1.2rem;
  line-height: 1.8;
  text-align: left;
  list-style: none;
  padding: 0;
  width: 100%;
  max-width: 800px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const FAQItem = styled.li`
  background: var(--text-dark);
  margin: 1rem 0;
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  color: var(--text-light);
  font-weight: bold;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, background-color 0.3s ease;
  border-left: 8px solid var(--electric-green);

  &:hover {
    background: linear-gradient(145deg, var(--dark-green), var(--green));
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
    border-left: 5px solid var(--electric-green);
  }
`;

const Question = styled.span`
  font-size: 1.2rem;
  flex: 1;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Answer = styled.p`
  font-size: 1.1rem;
  color: var(--text-light);
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const FAQContent = () => {
    const faqs = [
        {
            question: "Czym jest kalistenika?",
            answer: "Kalistenika to forma ćwiczeń siłowych, które wykorzystują masę własnego ciała do budowania mięśni i poprawy ogólnej kondycji."
        },
        {
            question: "Jak działa trening EMS?",
            answer: "Trening EMS (Electrical Muscle Stimulation) wykorzystuje impuls elektryczny do stymulacji mięśni podczas ćwiczeń, co pozwala na efektywniejszy trening w krótszym czasie."
        },
        {
            question: "Jakie są korzyści z treningu EMS?",
            answer: "Korzyści z treningu EMS obejmują szybsze spalanie tkanki tłuszczowej, wzmocnienie mięśni, redukcję cellulitu, poprawę krążenia oraz redukcję bólów pleców."
        },
        {
            question: "Czy trening EMS jest bezpieczny?",
            answer: "Tak, trening EMS jest bezpieczny dla większości osób, jednak istnieją pewne przeciwwskazania, takie jak rozrusznik serca, ciąża czy choroba nowotworowa."
        },
        {
            question: "Ile kosztuje trening EMS?",
            answer: "Koszt treningu EMS zależy od wybranego pakietu. Na przykład, pojedynczy trening próbny kosztuje 100 zł, a pakiet 10 treningów kosztuje 1700 zł."
        }
    ];

    return (
        <FAQSection>
            <FAQTitle>FAQ</FAQTitle>
            <FAQList>
                {faqs.map((faq, index) => (
                    <FAQItem key={index}>
                        <Question>{faq.question}</Question>
                        <Answer>{faq.answer}</Answer>
                    </FAQItem>
                ))}
            </FAQList>
        </FAQSection>
    );
};

export default FAQContent;
