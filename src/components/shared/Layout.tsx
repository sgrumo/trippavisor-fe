import Head from 'next/head'
import React, { ReactNode } from 'react'
import Navbar from '../core/Navbar'

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
    <Navbar />
    <div className="m-auto h-full bg-yellow px-4 pt-4">
      <div className="bg-yellow">{children}</div>
    </div>
  </div>
)

export default Layout
