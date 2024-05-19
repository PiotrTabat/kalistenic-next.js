import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import heroImg from '../public/images/hero.png';

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  padding: 0 5%;
  color: var(--text-light);
  text-align: center;
  margin-top: 80px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
  @media (max-width: 768px) {
    height:100vh;
    margin-top: 55px;
    
  }
`;

const HeroContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
  }
`;

const HeroImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100%;
    height: auto;
    border-radius: 15px;
  }

  @media (max-width: 768px) {
    img {
      width: 80%;
      height: 100%;
      margin-bottom: 4rem;
    }
  }
  @media (max-width: 380px) {
    img {
      width: 75%;
      height: auto;
      margin-bottom: 6rem;
    }
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: var(--electric-orange);

  @media (min-width: 768px) {
    font-size: 3rem;
    margin-bottom: 60px;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
    line-height: 1.2;
  }
  @media (max-width: 380px) {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 60px;
  }
  @media (max-width: 380px) {
    font-size: 1rem;
    margin-bottom: 10px;
  }
`;

const ActionButton = styled.a`
  display: inline-block;
  font-size: 1.25rem;
  padding: 10px 30px;
  background-color: var(--electric-green);
  color: var(--text-dark);
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--electric-orange);
  }

  &:active {
    transform: scale(0.99);
  }

  @media (max-width: 380px) {
    font-size: 1rem;
    padding: 8px 20px;
  }
`;

const Hero = () => (
    <HeroContainer>
        <HeroContent>
            <Title>Silniejszy i Szybszy <br/>z<br/> Technologią EMS</Title>
            <Subtitle>Zdobądź przewagę dzięki nowoczesnym metodom treningowym.</Subtitle>
            <Link href="/contact" passHref legacyBehavior>
                <ActionButton>Zapisz się na trening</ActionButton>
            </Link>
        </HeroContent>
        <HeroImageContainer>
            <Image
                src={heroImg}
                alt="EMS Training"
                width={550}
                height={600}
                priority
            />
        </HeroImageContainer>
    </HeroContainer>
);

export default Hero;
