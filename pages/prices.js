import PricesContent from '../components/PricesContent';
import Head from 'next/head';

const Prices = () => {
    return (
        <>
            <Head>
                <title>Cennik - KalistenicEMS</title>
                <meta name="description" content="Sprawdź nasze ceny za treningi EMS, masaże i inne usługi." />
            </Head>
            <PricesContent />
        </>
    );
};

export default Prices;
