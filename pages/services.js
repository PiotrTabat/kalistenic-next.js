import ServicesContent from '../components/ServicesContent';
import Head from 'next/head';

const Services = () => {
    return (
        <>
            <Head>
                <title>Usługi - KalistenicEMS</title>
                <meta name="description" content="Poznaj nasze usługi, w tym trening EMS, trening personalny, masaże i więcej." />
            </Head>
            <ServicesContent />
        </>
    );
};

export default Services;
