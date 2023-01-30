import React from "react";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>MKS Sistemas</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}
