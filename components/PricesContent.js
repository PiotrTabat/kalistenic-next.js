import React from 'react';
import styled from 'styled-components';

const PricesSection = styled.section`
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
    height: calc(100vh - 80px);
    box-sizing: border-box;

    @media (max-width: 768px) {
        gap: 1rem;
        padding: 4rem 10%;
        align-items: center;
        justify-content: center;
        display: flex;
        
    }
`;

const PricesTitle = styled.h2`
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

const PriceList = styled.ul`
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

const PriceItem = styled.li`
  background: var(--text-dark);
  margin: 1rem 0;
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  color: var(--text-light);
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.3s ease, background-color 0.3s ease;
  border-left: 8px solid var(--electric-orange);

  &:hover {
    background: var(--electric-red);
    transform: translateY(-3px);
  }
  
    @media (max-width: 768px) {
    padding: 1.5rem 1rem;
    border-left: 5px solid var(--electric-orange);
    }
`;

const PriceLabel = styled.span`
  font-size: 1.2rem;
  flex: 1;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const PriceAmount = styled.span`
  font-size: 1.3rem;
  flex: 0 0 auto;
  color: var(--electric-green);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const AdditionalInfo = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  text-align: center;
  color: var(--text-light);
  width: 100%;
  max-width: 800px;
  margin-top: 1rem;
  background: var(--text-dark);
  padding: 0.75rem 1rem;
  border-radius: 10px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    width: 100%;
  }
`;

const PricesContent = () => (
    <PricesSection>
        <PricesTitle>Cennik</PricesTitle>
        <PriceList>
            <PriceItem>
                <PriceLabel>Trening próbny</PriceLabel>
                <PriceAmount>100 zł</PriceAmount>
            </PriceItem>
            <PriceItem>
                <PriceLabel>Pakiet 4 treningów</PriceLabel>
                <PriceAmount>800 zł</PriceAmount>
            </PriceItem>
            <PriceItem>
                <PriceLabel>Pakiet 10 treningów</PriceLabel>
                <PriceAmount>1700 zł</PriceAmount>
            </PriceItem>
            <PriceItem>
                <PriceLabel>Masaż 60 min</PriceLabel>
                <PriceAmount>150 zł</PriceAmount>
            </PriceItem>
            <PriceItem>
                <PriceLabel>Masaż 90 min</PriceLabel>
                <PriceAmount>200 zł</PriceAmount>
            </PriceItem>
        </PriceList>
        <AdditionalInfo>
            Ceny usług podawane są za zajęcia stacjonarne w studio treningowym.<br/> Za usługi dojazdowe naliczana jest dodatkowa opłata + 50 zł.
        </AdditionalInfo>
    </PricesSection>
);

export default PricesContent;
