import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import krystianLogo from '../public/images/KrystianLogo.jpeg';

const AboutSection = styled.section`
  background: var(--deep-blue);
  padding: 2rem 10%;
  color: var(--text-light);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  min-height: calc(100vh - 60px);
  box-sizing: border-box;
`;

const AboutTitle = styled.h2`
  font-size: 2.8rem;
  color: var(--electric-red);
  margin-bottom: 1rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 300px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: auto;
  }
`;

const AboutDescription = styled.div`
  flex: 2;
  font-size: 1.25rem;
  line-height: 1.6;
  text-align: justify;
  max-width: 800px;
  text-indent: 2rem;
`;

const AboutContent = () => (
    <AboutSection>
        <AboutTitle>O mnie</AboutTitle>
        <ContentWrapper>
            <ImageContainer>
                <Image src={krystianLogo} alt="Krystian Kalista" />
            </ImageContainer>
            <AboutDescription>
                <p>
                    Magister wychowania fizycznego, absolwent studiów podyplomowych z przygotowania motorycznego oraz fizjoterapii w sporcie.
                    Licencjonowany trener personalny, trener EMS i masażysta. Uczestnik wielu szkoleń branżowych oraz szkoleniowiec treningu EMS.
                    Posiadam bogate doświadczenie zawodowe zdobyte przez lata współpracy z podopiecznymi. Charakteryzuję się indywidualnym podejściem do
                    każdego ćwiczącego, dbaniem o pozytywną atmosferę podczas zajęć oraz utrzymywaniem dobrego kontaktu poza nimi. Jestem pasjonatem górskich wypraw
                    rowerowych i pieszych, spływów kajakowych oraz aktywności na świeżym powietrzu. Interesuję się piłką nożną, gotowaniem i historią.
                </p>
            </AboutDescription>
        </ContentWrapper>
    </AboutSection>
);

export default AboutContent;
