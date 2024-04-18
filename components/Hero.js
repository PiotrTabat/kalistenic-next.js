import styled from 'styled-components';
import Image from 'next/image';

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90vh; 
  padding: 0 10%;
  color: var(--text-light);
  text-align: center;
  margin-top: 80px; 
`;

const HeroContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const HeroImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 40px;
  color: var(--electric-orange);
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 40px;
`;

const ActionButton = styled.button`
  font-size: 1.25rem;
  padding: 10px 30px;
  background-color: var(--electric-green);
  color: var(--text-dark);
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--green);
    transform: scale(1.01);
  }
  
&:active {
    transform: scale(0.99);
  }
`;

const Hero = () => (
    <HeroContainer>
        <HeroContent>
            <Title>Silniejszy i Szybszy z Technologią EMS</Title>
            <Subtitle>Zdobądź przewagę dzięki nowoczesnym metodom treningowym.</Subtitle>
            <ActionButton>Zapisz się na trening</ActionButton>
        </HeroContent>
        <HeroImageContainer>
            <Image
                src="/hero.png"
                alt="EMS Training"
                width={600}
                height={700}
                layout="responsive"
            />
        </HeroImageContainer>
    </HeroContainer>
);

export default Hero;
