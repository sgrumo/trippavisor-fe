import { Head, Html, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html>
      <Head />
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito"
        rel="stylesheet"
      />
      <body className="font-sans bg-white dark:bg-slate-600">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
