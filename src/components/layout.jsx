import { ThemeProvider } from 'styled-components'
import { defaultTheme, darkTheme } from 'theme'
import { useSelector } from 'react-redux'
import { themeSelector } from 'slices/theme'
import GlobalStyle from 'components/global-style'
import { dialogSelector } from 'slices/dialog'

const Layout = ({ children }) => {
  const theme = useSelector(themeSelector)
  const show = useSelector(dialogSelector)

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : defaultTheme}>
      <GlobalStyle showDialog={show} />
      {children}
    </ThemeProvider>
  )
}

export default Layout
