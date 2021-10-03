import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

const styled = { createGlobalStyle }

const GlobalStyle = styled.createGlobalStyle`
  ${normalize()}

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

    background-color: ${(props) => props.theme.backgroundColor};
    font-family: ${(props) => props.theme.primaryFont};

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`

export default GlobalStyle
