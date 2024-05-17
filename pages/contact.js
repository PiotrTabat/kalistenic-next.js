import ContactContent from '../components/ContactContent';
import Head from 'next/head';

const Contact = () => {
    return (
        <>
            <Head>
                <title>Kontakt - KalistenicEMS</title>
                <meta name="description" content="Skontaktuj się z Krystianem Kalista, trenerem EMS i masażystą." />
            </Head>
            <ContactContent />
        </>
    );
};

export default Contact;
