import Main from "../components/main";
import Head from "next/head";
import { globalCss } from "../public/styles/config";

export default function App() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="#" />

        {/* Roboto font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
          rel="stylesheet"
        />
        {/* Coolwonder font */}
        <link
          href="http://fonts.cdnfonts.com/css/coolwonder"
          rel="stylesheet"
        />
        {/* Helvetica Neue font */}
        <link
          href="http://fonts.cdnfonts.com/css/helvetica-neue-9"
          rel="stylesheet"
        />
        <style>{globalCss}</style>
      </Head>
      <Main />
    </>
  );
}
