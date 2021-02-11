import '../styles/index.css';
import '../styles/prism.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Austin Crim - Web Developer</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}
export default MyApp;
