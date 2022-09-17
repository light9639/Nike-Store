import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
// import store from './store'
import { ThemeProvider } from 'next-themes'
import Layout from "../components/LayOut";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
