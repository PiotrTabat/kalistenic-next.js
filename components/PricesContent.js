import React from 'react';
import styled from 'styled-components';

const PricesSection = styled.section`
  background: var(--deep-blue);
  padding: 1.5rem 5%;
  color: var(--text-light);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  min-height: 100vh;
  box-sizing: border-box;
`;

const PricesTitle = styled.h2`
  font-size: 2.5rem;
  color: var(--electric-green);
  margin-bottom: 1rem;
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  padding: 0 2rem;
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
`;

const PriceItem = styled.li`
  background: var(--text-dark);
  margin: 0.5rem 0;
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
`;

const PriceLabel = styled.span`
  font-size: 1.3rem;
  flex: 1;
  text-align: left;
`;

const PriceAmount = styled.span`
  font-size: 1.3rem;
  flex: 0 0 auto;
  color: var(--electric-green);
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
