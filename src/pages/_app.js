import Layout from "../components/Layout";
import Head from "next/head";
import FontStyles from "../fonts/fonts.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <title>Mock</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link href={FontStyles} rel="stylesheet" />
      </Head>
      <Layout>
        <main>
          <Component {...pageProps} />
        </main>
        <style jsx global>{`
          body {
            margin: 0 !important;
            padding: 0 !important;
            top: 0 !important;
            font-family: SourceSansPro;
            font-size: 22px;
          }
          button {
            font-size: 22px;
            background-color: #ee2d1c;
            color: #fff;
            min-height: 55px;
            border-radius: 30px;
            border-color: red;
            padding: 15px 15px 15px 15px;
            font-weight: lighter !important;
          }
          h1 {
            font-size: 48px;
            line-height: 48px;
            color: #fff;
            font-weight: lighter;
          }
          h5 {
            font-size: 22px;
            line-height: 22px;
            font-weight: bold;
            color: #ee2d1c;
          }
          a {
            color: #88939e;
            font-size: 22px;
            line-height: 28px;
            text-decoration: none !important;
          }
          a:hover {
            color: #4c4c51;
          }
        `}</style>
      </Layout>
    </div>
  );
};

export default MyApp;
