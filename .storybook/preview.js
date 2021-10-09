import { ThemeProvider } from 'styled-components'

import { defaultTheme, darkTheme } from 'theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      // Array of plain string values or MenuItem shape (see below)
      items: ['light', 'dark'],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
}

// Function to obtain the intended theme
const getTheme = (themeName) => {
  return themeName === 'light' ? defaultTheme : darkTheme
}

const withThemeProvider = (Story, context) => {
  const theme = getTheme(context.globals.theme)
  return (
    <ThemeProvider theme={theme}>
      <Story {...context} />
    </ThemeProvider>
  )
}

export const decorators = [withThemeProvider]
