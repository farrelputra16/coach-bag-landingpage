import Head from "next/head";

import "../styles/globals.css";
import "../styles/grid.css";

import "boxicons/css/boxicons.min.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>y2kcoach</title>
        <meta
          name="description"
          content="Stylish bags for women - Shop the latest trends!"
        />
        <link rel="icon" href="/bag-icon.png" /> {/* Replace with your bag icon */}
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;