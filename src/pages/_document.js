import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='en-US'>
        <Head>
          <meta
            name='description'
            content='The portfolio of Austin Crim, a fullstack web developer'
          />
          <script type='text/javascript' src='/theme.js'></script>
          <link
            rel='preload'
            href='/fonts/inter-var.ttf'
            as='font'
            type='font/ttf'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/rubik-var.ttf'
            as='font'
            type='font/ttf'
            crossOrigin='anonymous'
          />
        </Head>
        <body className='text-base transition-colors bg-base'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
