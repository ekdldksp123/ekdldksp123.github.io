import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  
    render() {
      return (
        <Html>
          <Head/>
          <body>
            <Main />
            <NextScript />
            <div id="portal" />
          </body>
        </Html>
      )
    }
  }
  export default MyDocument;