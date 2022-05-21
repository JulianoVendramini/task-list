import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'
import { client } from '../utils/apollo'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
