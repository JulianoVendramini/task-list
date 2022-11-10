import { createGlobalStyle } from 'styled-components'
import theme from './theme'
import 'react-toastify/dist/ReactToastify.css'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Roboto, --apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  html {
    font-size: 62.5%;
  }

  html, body{
    height: 100%;
    background: ${theme.colors.grey};
  }
`

export default GlobalStyle
