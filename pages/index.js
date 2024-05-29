import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhatEMS from '../components/WhatEMS';
import Benefits from '../components/Benefits';
import AboutContent from '../components/AboutContent';
import ServicesContent from '../components/ServicesContent';
import ContactContent from '../components/ContactContent';
import Footer from '../components/Footer';
import ImageCarousel from '../components/ImageCarousel';
import FAQContent from "../components/FAQContent";

const Home = () => {
    return (
        <>
            <Head>
                <title>KalistenicEMS</title>
                <meta name="description" content="Trening EMS, trening personalny, masaż sportowy" />
                <meta name="keywords" content="EMS, trening, masaż, personal training, fitness" />
                <meta property="og:title" content="KalistenicEMS - trening EMS" />
                <meta property="og:description" content="Dołącz do nas i zacznij trening EMS już dziś!" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/images/hero.png" />
                <link rel="canonical" href="http://www.kalistenicems.pl" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Navbar />
            <Hero />
            <ImageCarousel />
            <WhatEMS />
            <Benefits />
            <ServicesContent />
            <AboutContent />
            <FAQContent />
            <ContactContent />
            <Footer />
        </>
    );
};

export default Home;
