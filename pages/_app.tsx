import 'styles/globals.css';
import type { AppProps } from 'next/app';
import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import Loading from 'components/Loading';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';

function MyApp({
    Component,
    pageProps,
}: AppProps<{
    session: Session;
}>) {
    const useIsomorphicLayoutEffect =
        typeof window !== 'undefined' ? useLayoutEffect : useEffect;

    const [loading, setLoading] = useState(true);

    const handleLoad = () => {
        console.log('intra');
        setLoading(false);
    };

    // useIsomorphicLayoutEffect(() => {
    //     window.addEventListener('load', () => {
    //         handleLoad;
    //     });
    //     return () => {
    //         window.removeEventListener('load', handleLoad);
    //     };
    // });

    // useLayoutEffect(() => {
    //     if (document.readyState === 'complete') {
    //         handleLoad();
    //     } else {
    //         window.addEventListener('load', handleLoad);
    //         return () => document.removeEventListener('load', handleLoad);
    //     }
    // });

    // useEffect(() => {
    //     window.addEventListener('DOMContentLoaded', () => console.log('intra'));
    // }, [loading]);

    return (
        <div>
            <div className='bg-neutral-800'>
                {loading ? (
                    <Loading />
                ) : (
                    <SessionProvider session={pageProps.session}>
                        <Component {...pageProps} />
                    </SessionProvider>
                )}
            </div>
        </div>
    );
}

export default MyApp;
