import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'
import { client } from '../utils/apollo'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import { ToastContainer } from 'react-toastify'

const StyledContainer = styled(ToastContainer)`
  &&&.Toastify__toast-container {
    font-size: 1.6rem;
  }
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
        <StyledContainer />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default MyApp
