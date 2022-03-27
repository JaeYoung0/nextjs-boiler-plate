import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Global } from '@emotion/react'
import { resetStyle } from '@/styles/resetStyle'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next.js Starter</title>
      </Head>
      <Global styles={resetStyle} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
