import { ThemeProvider } from 'styled-components'
import { defaultTheme, darkTheme } from 'theme'
import { useSelector } from 'react-redux'
import { themeSelector } from 'slices/theme'

const Layout = ({ children }) => {
  const theme = useSelector(themeSelector)

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : defaultTheme}>
      {children}
    </ThemeProvider>
  )
}

export default Layout
