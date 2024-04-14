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
`;

const HeroContent = styled.div`
  max-width: 50%;
  padding: 20px;
`;

const HeroImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  color: var(--electric-yellow);
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 30px;
`;

const ActionButton = styled.button`
  font-size: 1.25rem;
  padding: 10px 30px;
  background-color: var(--dark-blue);
  color: var(--electric-orange);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--electric-orange);
    color: var(--text-light);
    border-radius: 10px;
  }
`;

const Hero = () => {
    return (
        <HeroContainer>
            <HeroContent>
                <Title>Nowa Era Fitness z EMS</Title>
                <Subtitle>Odkryj przewagę treningu elektrostymulacyjnego i osiągnij swoje cele szybciej.</Subtitle>
                <ActionButton>Zapisz się na trening</ActionButton>
            </HeroContent>
            <HeroImageContainer>
                <Image
                    src="/logo.png"
                    alt="EMS Training"
                    width={500}
                    height={600}
                />
            </HeroImageContainer>
        </HeroContainer>
    );
};

export default Hero;
