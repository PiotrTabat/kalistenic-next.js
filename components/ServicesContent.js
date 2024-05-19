import React, { useState } from 'react';
import styled from 'styled-components';

const ServicesSection = styled.section`
  background: var(--deep-blue);
  padding: 1rem 5%;
  color: var(--text-light);
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 4rem 5%;
  }
`;

const ServicesTitle = styled.h2`
  font-size: 2.4rem;
  margin-bottom: 3rem;
  color: var(--electric-green);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ServiceList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 0.8rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Service = styled.div`
  flex: 1 1 calc(30% - 1rem);
  background: var(--text-dark);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    flex: 1 1 100%;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--electric-green);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ServiceDescription = styled.p`
  font-size: 0.9rem;
  color: var(--text-light);

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const DetailedDescription = styled.div`
  font-size: 0.9rem;
  color: var(--text-light);
  margin-top: 1rem;
  max-height: 100px;
  overflow: auto;
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  transition: opacity 0.3s ease-in-out;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ServicesContent = () => {
    const [openService, setOpenService] = useState(null);

    const handleMouseEnter = (index) => {
        setOpenService(index);
    };

    const handleMouseLeave = () => {
        setOpenService(null);
    };

    const services = [
        {
            title: "Trening EMS",
            description: "Trening EMS z osobistym trenerem.",
            detailedDescription: "Trening EMS wykorzystuje technologię elektrostymulacji mięśniowej, aby maksymalizować wyniki w krótszym czasie."
        },
        {
            title: "Trening personalny klasyczny",
            description: "Klasyczny trening z trenerem personalnym.",
            detailedDescription: "Tradycyjne metody treningowe dostosowane do Twoich indywidualnych potrzeb i celów."
        },
        {
            title: "Masaż sportowy",
            description: "Regeneracja po wysiłku fizycznym.",
            detailedDescription: "Masaż sportowy pomaga zredukować napięcia mięśniowe i przyspieszyć proces regeneracji."
        },
        {
            title: "Masaż klasyczny",
            description: "Relaks i regeneracja.",
            detailedDescription: "Masaż klasyczny złagodzi stres i napięcie, poprawiając krążenie oraz ogólny stan zdrowia."
        },
        {
            title: "Masaż relaksacyjny",
            description: "Głębokie odprężenie i redukcja stresu.",
            detailedDescription: "Masaż relaksacyjny wprowadzi Cię w stan głębokiego odprężenia."
        },
        {
            title: "Terapia manualna",
            description: "Leczenie dysfunkcji narządu ruchu.",
            detailedDescription: "Terapia manualna polega na diagnostyce i leczeniu dysfunkcji narządu ruchu za pomocą technik manualnych."
        }
    ];

    return (
        <ServicesSection>
            <ServicesTitle>Usługi</ServicesTitle>
            <ServiceList>
                {services.map((service, index) => (
                    <Service
                        key={index}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <ServiceTitle>{service.title}</ServiceTitle>
                        <ServiceDescription>{service.description}</ServiceDescription>
                        <DetailedDescription $isOpen={openService === index}>
                            {service.detailedDescription}
                        </DetailedDescription>
                    </Service>
                ))}
            </ServiceList>
        </ServicesSection>
    );
};

export default ServicesContent;
