import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import heroImg from '../public/images/hero.png';

const HeroContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    max-height: 1050px;
    padding: 0 110px;
    color: var(--text-light);
    text-align: center;
    margin-top: 80px;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        justify-content: center;
        height: auto;
        margin-top: 55px;
        width: auto;
        padding: 0 20px;
    }

    @media (max-width: 480px) {
        padding: 0 20px;
    }

    @media (max-width: 380px) {
        padding: 0 20px;
    }

    @media (max-width: 320px) {
        padding: 0 10px;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 90vw;
    max-width: 1600px;
    margin: 0 auto;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        justify-content: center;
        height: auto;
    }
`;

const HeroContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    height: auto;
`;

const HeroImageContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        max-width: 90%;
        height: auto;
        border-radius: 15px;
    }

    @media (max-width: 768px) {
        img {
            width: 80%;
            height: auto;
            margin-top: 2rem;
        }
    }

    @media (max-width: 380px) {
        img {
            width: 75%;
            height: auto;
        }
    }
`;

const Title = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 40px;
    color: var(--electric-orange);
    height: auto;

    @media (min-width: 768px) {
        font-size: 2.5rem;
        margin-bottom: 60px;
    }

    @media (max-width: 768px) {
        font-size: 2rem;
        margin-bottom: 20px;
        min-height: auto;
    }

    @media (max-width: 380px) {
        font-size: 2rem;
        margin-bottom: 20px;
        margin-top: 40px;
    }

    @media (max-width: 320px) {
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

    @media (max-width: 768px) {
        font-size: 1.25rem;
        margin-bottom: 20px;
    }

    @media (max-width: 480px) {
        font-size: 1rem;
        margin-bottom: 20px;
    }

    @media (max-width: 380px) {
        font-size: 1rem;
        margin-bottom: 20px;
    }

    @media (max-width: 320px) {
        font-size: 0.75rem;
        margin-bottom: 20px;
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
        <Wrapper>
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
                    priority
                />
            </HeroImageContainer>
        </Wrapper>
    </HeroContainer>
);

export default Hero;
