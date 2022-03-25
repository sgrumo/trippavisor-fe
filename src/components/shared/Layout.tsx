import Head from 'next/head'
import React, { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className="h-screen">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/icon.png"></link>
      <meta name="theme-color" content="#fff" />
    </Head>
    <div className="bg-white dark:bg-slate-600 container m-auto h-full px-4 pt-4">
      {children}
    </div>
  </div>
)

export default Layout
