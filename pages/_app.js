import App from 'next/app';
import { GlobalStyles } from '../styles/GlobalStyles';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyles />
            <Navbar />
            <Component {...pageProps} />
        </>
    );
}

MyApp.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps };
};

export default MyApp;
