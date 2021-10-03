import { Provider } from 'react-redux'
import store from 'store'

import GlobalStyle from 'components/global-style'
import Layout from 'components/layout'

import '@fontsource/roboto-mono'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
