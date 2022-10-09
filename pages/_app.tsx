import "styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useState, useEffect, useLayoutEffect } from "react";
import Loading from "components/Loading";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

function MyApp({
    Component,
    pageProps,
}: AppProps<{
    session: Session;
}>) {
    const useIsomorphicLayoutEffect =
        typeof window !== "undefined" ? useLayoutEffect : useEffect;

    const [loading, setLoading] = useState(true);

    const handleLoad = () => {
        setLoading(false);
    };
    useIsomorphicLayoutEffect(() => {
        window.addEventListener("load", handleLoad);
        return () => {
            window.removeEventListener("load", handleLoad);
        };
    }, []);
    return (
        <div>
            <Head>
                <title>1337 | STUDIO</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>

            {/* {!loading ? (
				<SessionProvider session={session}>
					<Component {...pageProps} />
				</SessionProvider>
			) : (
				<Loading />
			)} */}
            {/* <SessionProvider session={session}> */}
            <SessionProvider>
                <Component {...pageProps} />
            </SessionProvider>
        </div>
    );
}

export default MyApp;
