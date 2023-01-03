import "../styles/globals.css";

import Layout from "../components/layout";

export default function customApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
