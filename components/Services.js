import React from 'react';
import styled from 'styled-components';

const ServicesSection = styled.section`
  background: var(--deep-blue);
  padding: 2rem;
`;

const Service = styled.div`
  background: var(--electric-blue);
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  padding: 1rem;
  margin-top: 1rem;
`;

const Services = () => {
    return (
        <ServicesSection>
            <h2>Usługi</h2>
            <Service>
                <h3>Indywidualny trening EMS</h3>
                <p>Skoncentruj się na swoich celach z osobistym trenerem, który dostosuje trening EMS do Twoich potrzeb.</p>
            </Service>
            <Service>
                <h3>Grupowe sesje treningowe</h3>
                <p>Dołącz do grupowych sesji EMS i trenuj w motywującej atmosferze z innymi entuzjastami fitnessu.</p>
            </Service>
        </ServicesSection>
    );
};

export default Services;
