import "../styles/globals.css";
import { useRouter } from "next/router";

import Layout from "../components/Layout";
import uuid from "react-uuid";

const routeConfig = {
  "/": {
    title: "Home",
  },
  "/projects": {
    title: "Projects",
  },
};

export default function CustomApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  return (
    <Layout currentRoute={routeConfig[pathname]} allRoutes={routeConfig}>
      <Component {...pageProps} />
    </Layout>
  );
}
