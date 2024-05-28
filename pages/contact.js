import ContactContent from '../components/ContactContent';
import Head from 'next/head';
import styled from 'styled-components';

const ContaktContainer = styled.div`
    padding: 20px;
    max-width: 90vw;
    margin: 90px auto;
    background: var(--deep-blue);
    color: var(--text-light);
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Contact = () => {
    return (
        <>
            <Head>
                <title>Kontakt - KalistenicEMS</title>
                <meta name="description" content="Skontaktuj się z Krystianem Kalista, trenerem EMS i masażystą." />
            </Head>
            <ContaktContainer>
            <ContactContent />
            </ContaktContainer>
        </>
    );
};

export default Contact;
