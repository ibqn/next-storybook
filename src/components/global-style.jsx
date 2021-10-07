import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

const styled = { createGlobalStyle }

const GlobalStyle = styled.createGlobalStyle`
  ${normalize()}

  body {
    padding: 0;
    margin: 0;

    font-size: 16px;

    ${(props) => props.showDialog && `overflow: hidden;`}

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
