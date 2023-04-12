import '../styles/globals.scss'
import '../styles/Swiper.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'next-themes'
import Layout from "@components/LayOut";
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { SessionProvider } from "next-auth/react"
import { store } from '../app/index';

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

export let persistor = persistStore(store);

function App({ Component, pageProps }: AppProps): JSX.Element {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  if (!domLoaded) {
    return <></>;
  } else {
    return (
      <ThemeProvider attribute="class">
        <SessionProvider session={pageProps.session}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </PersistGate>
          </Provider>
        </SessionProvider>
      </ThemeProvider>
    )
  }
}

export default App
// export default wrapper.withRedux(MyApp)