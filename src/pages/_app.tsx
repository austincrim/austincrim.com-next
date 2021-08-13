import * as React from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import '../styles/index.css'

function MyApp({ Component, pageProps, router }: AppProps) {
  React.useEffect(() => {
    fetch(`/api/view?path=${router.asPath}`)
  }, [router.asPath])

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
