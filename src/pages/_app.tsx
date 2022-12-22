import { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { Provider as NextAuthProvder } from 'next-auth/client'

import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvder session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </NextAuthProvder>
  )
}

export default MyApp
