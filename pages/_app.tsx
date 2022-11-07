import 'styles/globals.css';
import type { AppProps } from 'next/app';
import { useState, useEffect, useLayoutEffect } from 'react';
import Loading from 'components/Loading';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';
import Router from 'next/router';

function MyApp({
    Component,
    pageProps,
}: AppProps<{
    session: Session;
}>) {
    // const useIsomorphicLayoutEffect =
    //     typeof window !== 'undefined' ? useLayoutEffect : useEffect;

    // const handleLoad = () => {
    //     setLoading(false);
    // };

    // useIsomorphicLayoutEffect(() => {
    //     window.addEventListener('load', handleLoad);
    //     return () => {
    //         window.removeEventListener('load', handleLoad);
    //     };
    // });

    const [loading, setLoading] = useState(false);

    Router.events.on('routeChangeStart', (url) => {
        setLoading(true);
    });

    Router.events.on('routeChangeComplete', (url) => {
        setLoading(false);
    });

    return (
        <div className='bg-neutral-800'>
            {loading ? (
                <Loading />
            ) : (
                <SessionProvider session={pageProps.session}>
                    <Component {...pageProps} />
                </SessionProvider>
            )}

            {/* <SessionProvider session={pageProps.session}>
                <Component {...pageProps} />
            </SessionProvider> */}
        </div>
    );
}

export default MyApp;
