import Head from 'next/head'
import type { AppProps } from 'next/app'
import '../styles/index.css'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <title>Austin Crim - Web Developer</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
