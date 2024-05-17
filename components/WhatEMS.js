import React from 'react';
import styled from 'styled-components';

const EMSSection = styled.section`
  background: var(--deep-blue);
  padding: 2rem 10%;
  color: var(--text-light);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 2rem 5%;
  }
`;

const EMSTitle = styled.h2`
  font-size: 2.8rem;
  color: var(--electric-red);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const EMSDescription = styled.div`
  font-size: 1.25rem;
  line-height: 1.6;
  text-align: justify;
  text-indent: 2rem;

  p {
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    text-indent: 1rem;
  }
`;

const EMSBenefits = styled.ul`
  font-size: 1.25rem;
  line-height: 1.6;
  text-align: left;
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding-left: 1rem;
  }
`;

const EMSSectionTitle = styled.h3`
  font-size: 2rem;
  color: var(--electric-green);
  margin-top: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const EMSListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const TwoColumnGrid = styled.div`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  text-align: justify;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  width: 100%;

  div p {
    font-size: 1.4rem;
    margin-bottom: 2rem;
    color: var(--electric-orange);

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    grid-template-columns: 1fr;
  }
`;

const WhatEMS = () => (
    <EMSSection>
        <EMSTitle>EMS (Electrical Muscle Stimulation)</EMSTitle>
        <EMSDescription>
            <p>
                Trening EMS polega na wykonywaniu ćwiczeń w kombinezonie, do którego przyczepione są elektrody. Impuls elektryczny stymuluje mięśnie do pracy.
                Podczas treningu mięśnie stymulowane są jednocześnie przez elektrody umieszczone aż na 9 grupach mięśniowych. Dzięki temu intensywny trening trwa
                zaledwie 30-45 minut, co odpowiada 2 godzinom ćwiczeń na siłowni. Trening EMS to nowoczesna, bardzo efektywna metoda treningowa, która pomaga w krótkim czasie
                osiągnąć pożądany cel. Trening prowadzony jest w kameralnej sali treningowej, jeden na jeden z trenerem personalnym. Intensywność treningu dostosowywana jest indywidualnie do każdego podopiecznego.
            </p>
        </EMSDescription>
        <EMSSectionTitle>Podstawowe zalety treningu EMS</EMSSectionTitle>
        <EMSBenefits>
            <EMSListItem>Zmaksymalizowanie efektów w najkrótszym czasie</EMSListItem>
            <EMSListItem>Szybkie spalanie tkanki tłuszczowej</EMSListItem>
            <EMSListItem>Bardzo skuteczna metoda rehabilitacji pourazowej</EMSListItem>
            <EMSListItem>Wzmacnianie siły mięśni</EMSListItem>
            <EMSListItem>Aktywacja mięśni głębokich</EMSListItem>
            <EMSListItem>Zwiększenie ukrwienia mięśni</EMSListItem>
            <EMSListItem>Ujędrnienie ciała</EMSListItem>
            <EMSListItem>Znikome obciążenie stawów podczas treningu</EMSListItem>
            <EMSListItem>Bardzo duża redukcja cellulitu</EMSListItem>
            <EMSListItem>Redukcja/likwidacja bólów pleców</EMSListItem>
            <EMSListItem>Poprawa ogólnej sprawności i kondycji</EMSListItem>
        </EMSBenefits>
        <EMSSectionTitle>Dla kogo (wskazania i przeciwwskazania)</EMSSectionTitle>
        <TwoColumnGrid>
            <div>
                <p>
                    Jedynymi przeciwwskazaniami są:
                </p>
                <EMSBenefits>
                    <EMSListItem>Rozrusznik serca</EMSListItem>
                    <EMSListItem>Ciąża</EMSListItem>
                    <EMSListItem>Choroba nowotworowa</EMSListItem>
                </EMSBenefits>
            </div>
            <div>
                <p>
                    Trening dedykowany jest szczególnie dla osób:
                </p>
                <EMSBenefits>
                    <EMSListItem>Chcących zredukować masę ciała</EMSListItem>
                    <EMSListItem>Wyrzeźbić sylwetkę</EMSListItem>
                    <EMSListItem>Cierpiących na bóle pleców</EMSListItem>
                    <EMSListItem>Wracających do aktywności po kontuzji</EMSListItem>
                    <EMSListItem>Po porodzie (świetnie wzmacnia mięśnie brzucha)</EMSListItem>
                </EMSBenefits>
            </div>
        </TwoColumnGrid>
    </EMSSection>
);

export default WhatEMS;
