import styled from 'styled-components';
import AboutContent from '../components/AboutContent';
import Head from 'next/head';

const AboutContainer = styled.div`
    padding: 20px;
    max-width: 90vw;
    margin: 90px auto;
    background: var(--deep-blue);
    color: var(--text-light);
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const About = () => {
    return (
        <>
            <Head>
                <title>O mnie - KalistenicEMS</title>
                <meta name="description" content="Dowiedz się więcej o Krystianie Kalista, trenerze EMS i masażyście." />
            </Head>
            <AboutContainer>
                <AboutContent />
            </AboutContainer>
        </>
    );
};

export default About;
