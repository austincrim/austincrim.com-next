import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <meta key="og:type" property="og:type" content="website"></meta>
          <script type="text/javascript" src="/theme.js"></script>
        </Head>
        <body className="text-base transition-colors duration-300 bg-base">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
