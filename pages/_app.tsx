import Head from "next/head";
import Script from "next/script";
import { useLayoutEffect } from "react";
import { useScript } from "../public/js/hooks";
import { init, scripts, swiper as swiperURL } from "../public/styles/config";

export default function MyApp({ Component, pageProps }) {
  const parallax = useScript(scripts[0]);
  const swiper = useScript(scripts[1]);
  const gsap = useScript(scripts[2]);

  //useLayoutEffect는 레이아웃 단계에서 동작하기 때문에 페인팅이 일어난 후 동작하지 않는다.
  useLayoutEffect(() => {
    if (parallax === "ready" && swiper === "ready" && gsap === "ready") {
      init();
      const script = document.createElement("script");
      script.src = scripts[3];
      script.async = true;
      document.body.appendChild(script);
    }
  }, [parallax, swiper, gsap]);

  return (
    <>
      <Head>
        <title>Vivid</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="stylesheet" href={swiperURL} />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </Head>
      <body>
        <Component {...pageProps} />
      </body>
    </>
  );
}
