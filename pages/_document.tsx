import { Html, Head, Main, NextScript } from 'next/document'
import Nav from './nav';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link href="https://fonts.cdnfonts.com/css/dunkin-lyons" rel="stylesheet"></link>
      <script src="https://kit.fontawesome.com/954c6a43a4.js"></script>
      <body>
        <Nav/>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
