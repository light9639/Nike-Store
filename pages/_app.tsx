import '../styles/globals.scss'
import '../styles/Swiper.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'next-themes'
import Layout from "../components/LayOut";
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
import { SessionProvider } from "next-auth/react"
import { wrapper } from "../store";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter()
  
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <ThemeProvider attribute="class">
      <SessionProvider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </ThemeProvider>
  )
}

export default wrapper.withRedux(MyApp)
