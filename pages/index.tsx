import Main from "../components/main";
import Head from "next/head";
import { globalCss, init, scripts } from "../public/styles/config";
import Script from "next/script";
import { useScript } from "../public/js/hooks";

export default function App() {

    return (
        <>
            <Head>
                <link rel="shortcut icon" href="#" />
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
            <Main />
            <Script 
                id="parallax"
                src={scripts[0]} 
                strategy="beforeInteractive"
            />
            <Script 
                id="swiper"
                src={scripts[1]} 
                strategy="beforeInteractive"
            />
            <Script 
                id="gsap"
                src={scripts[2]} 
                strategy="afterInteractive"
                onLoad={() => {
                    init();
                    const script = document.createElement('script'); 
                    script.src = scripts[3];
                    script.async = true;
                    document.body.appendChild(script);
                }}
            />
        </>
    )
}


