import Main from "../components/main";
import Head from "next/head";
import { globalCss, init, scripts } from "../public/styles/config";
import { useLayoutEffect } from "react";
import { useScript } from "../public/js/hooks";

export default function App() {
    const parallax = useScript(scripts[0])
    const swiper = useScript(scripts[1])
    const gsap = useScript(scripts[2])

    //useLayoutEffect는 레이아웃 단계에서 동작하기 때문에 페인팅이 일어난 후 동작하지 않는다. 
    useLayoutEffect(() => {
        if (parallax === 'ready' && swiper === 'ready' && gsap === 'ready') {
            init();
            const script = document.createElement('script');
            script.src = scripts[3];
            script.async = true;
            document.body.appendChild(script);
        }
    }, [parallax, swiper, gsap])

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
            {/* TODO next script 잘 다루는 법 공부 필요!!
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
                strategy="lazyOnload"
                onLoad={() => {
                    init();
                    const script = document.createElement('script');
                    script.src = scripts[3];
                    script.async = true;
                    document.body.appendChild(script);
                }}
            /> */}
            <Main />
        </>
    )
}


