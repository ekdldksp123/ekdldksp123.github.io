import Main from "../components/main";
import 'setimmediate';
import Head from "next/head";
import { globalCss } from "../public/styles/config";

export default function App() {
    
    return (
       <>
            <Head>
                <title>VIVID</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />

                {/* Roboto font */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet" />
                {/* Alpha Centauri font */}
                {/* <link href="https://www.fontzip.com/storage/2019/12/25/alpha-centauri/webfonts/alpha-centauri-Medium.css" rel="stylesheet" /> */}
                {/* Helvetica Neue font */}
                <link href="http://fonts.cdnfonts.com/css/helvetica-neue-9" rel="stylesheet" />
                
                <style>{globalCss}</style>
            </Head>
            <Main/>
       </>
    );
}


