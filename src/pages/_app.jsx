import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme, darkTheme } from 'theme'
import GlobalStyle from 'components/global-style'

import '@fontsource/roboto-mono'

function MyApp({ Component, pageProps }) {
  const [useDarkTheme, setUseDarkTheme] = useState(false)
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
