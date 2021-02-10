import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta
                        name='description'
                        content='The portfolio of Austin Crim, a fullstack web developer'
                    />
                    <script type='text/javascript' src='/theme.js'></script>
                </Head>
                <body className='transition-colors dark:text-gray-100 dark:bg-gray-900'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
