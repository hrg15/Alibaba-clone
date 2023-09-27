import Layout from "@/components/Layout";
import "@/styles/utilities.css";
import "@/styles/globals.css";
import "@/styles/atomic.css";
import "@/styles/layout.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
