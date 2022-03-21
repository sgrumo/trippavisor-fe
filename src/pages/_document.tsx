import { Head, Html, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html className="dark">
      <Head />
      <body className="bg-white dark:bg-slate-600">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
