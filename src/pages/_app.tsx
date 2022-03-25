import type { AppProps } from 'next/app'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component className="h-full" {...pageProps} />
}

export default MyApp
