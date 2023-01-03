import "../styles/globals.css";

import Layout from "../components/Layout";

export default function customApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
