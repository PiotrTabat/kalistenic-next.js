import React, { useState } from 'react';
import styled from 'styled-components';

const FAQSection = styled.section`
    background: var(--deep-blue);
    padding: 2rem 5%;
    margin-top: 80px;
    color: var(--text-light);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    box-sizing: border-box;
    min-height: 80vh;

    @media (max-width: 768px) {
        gap: 1rem;
        padding: 4rem 10%;
        align-items: center;
        justify-content: center;
        display: flex;
        min-height: auto;
        margin-top: 20px;
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

const FAQList = styled.div`
    width: 100%;
    max-width: 800px;
`;

const FAQItem = styled.div`
    background: var(--text-dark);
    margin: 1rem 0;
    padding: 1rem 1.5rem;
    border-radius: 10px;
    color: var(--text-light);
    cursor: pointer;
    transition: background-color 0.3s ease;
    border-left: 8px solid var(--electric-orange);

    &:hover {
        background: var(--electric-red);
    }

    @media (max-width: 768px) {
        padding: 1.5rem 1rem;
        border-left: 5px solid var(--electric-orange);
    }
`;

const Question = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

const Answer = styled.div`
    font-size: 1.1rem;
    margin-top: 0.5rem;
    max-height: ${({ $isOpen }) => ($isOpen ? '1000px' : '0')};
    overflow: hidden;
    transition: max-height 0.3s ease;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

const ToggleIcon = styled.span`
    font-size: 1.5rem;
    transition: transform 0.3s ease;
    transform: ${({ $isOpen }) => ($isOpen ? 'rotate(45deg)' : 'rotate(0)')};

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

const FAQContent = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

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
                    <FAQItem key={index} onClick={() => handleToggle(index)}>
                        <Question>
                            {faq.question}
                            <ToggleIcon $isOpen={openIndex === index}>{openIndex === index ? '-' : '+'}</ToggleIcon>
                        </Question>
                        <Answer $isOpen={openIndex === index}>{faq.answer}</Answer>
                    </FAQItem>
                ))}
            </FAQList>
        </FAQSection>
    );
};

export default FAQContent;
