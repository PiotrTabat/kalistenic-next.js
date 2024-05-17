import AboutContent from '../components/AboutContent';
import Head from 'next/head';

const About = () => {
    return (
        <>
            <Head>
                <title>O mnie - KalistenicEMS</title>
                <meta name="description" content="Dowiedz się więcej o Krystianie Kalista, trenerze EMS i masażyście." />
            </Head>
            <AboutContent />
        </>
    );
};

export default About;
