import React from 'react';
import styled from 'styled-components';

const ServicesSection = styled.section`
  background: var(--deep-blue);
  padding: 2rem;
`;

const Service = styled.div`
  background: var(--deep-blue);
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  padding: 1rem;
  margin-top: 1rem;
`;

const ServicesContent = () => {
    return (
        <ServicesSection>
            <h2>Usługi</h2>
            <Service>
                <h3>Indywidualny trening EMS</h3>
                <p>Skoncentruj się na swoich celach z osobistym trenerem, który dostosuje trening EMS do Twoich potrzeb.</p>
            </Service>
            <Service>
                <h3>trening personalny</h3>
                <p>Dołącz do grupowych sesji EMS i trenuj w motywującej atmosferze z innymi entuzjastami fitnessu.</p>
            </Service>
            <Service>
                <h3>Masaże</h3>
                <p>Dołącz do grupowych sesji EMS i trenuj w motywującej atmosferze z innymi entuzjastami fitnessu.</p>
            </Service>
            <Service>
                <h3>Dodatkowe treningi z dojazdem</h3>
                <p>Dołącz do grupowych sesji EMS i trenuj w motywującej atmosferze z innymi entuzjastami fitnessu.</p>
            </Service>
        </ServicesSection>
    );
};

export default ServicesContent;