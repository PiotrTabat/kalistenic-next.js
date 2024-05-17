import Navbar from '../components/Navbar';
import { GlobalStyles } from '../styles/GlobalStyles';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
                <title>KalistenicEMS</title>
            </Head>
            <GlobalStyles />
            <Navbar />
            <div id="app-container">
                <Component {...pageProps} />
            </div>
        </>
    );
}

export default MyApp;
