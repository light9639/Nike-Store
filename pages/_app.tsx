import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from './store'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  )
}

export default MyApp
