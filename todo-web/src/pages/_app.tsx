import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'
import { client } from '../utils/apollo'

import Feedback from '../components/Feedback'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Feedback />
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
