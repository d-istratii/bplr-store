import { Html, Head, Main, NextScript } from 'next/document';
import { useState, useEffect } from 'react';
import Loading from 'components/Loading';

export default function Document() {
    return (
        <Html>
            <Head>
                <link
                    href='https://fonts.googleapis.com/css2?family=Sora:wght@300&display=swap'
                    rel='stylesheet'
                />
            </Head>
            <body className='bg-neutral-900 font-Sora'>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
