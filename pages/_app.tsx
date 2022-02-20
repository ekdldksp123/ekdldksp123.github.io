import Head from 'next/head'

export default function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>Vivid</title>
                <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico?" />
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}