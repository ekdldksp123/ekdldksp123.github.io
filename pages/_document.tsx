import Document, { Html, Head, Main, NextScript } from 'next/document'
import { globalCss } from "../public/styles/config";

class MyDocument extends Document {
    
    static async getInitialProps(ctx) {
      const initialProps = await Document.getInitialProps(ctx);
      return { ...initialProps }
    }
  
    render() {
      return (
        <Html>
          <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />

                {/* Roboto font */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet" />
                {/* Coolwonder font */}
                <link href="http://fonts.cdnfonts.com/css/coolwonder" rel="stylesheet" />
                {/* Helvetica Neue font */}
                <link href="http://fonts.cdnfonts.com/css/helvetica-neue-9" rel="stylesheet" />
                <style>{globalCss}</style>
          </Head>
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