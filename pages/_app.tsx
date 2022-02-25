import 'styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div>
			<Head>
				<title>1337 | STUDIO</title>
				<meta charSet='UTF-8' />
				<meta name='description' content='1337 Fashion Studio' />
				<meta
					name='keywords'
					content='Tshirts, Shirts, Pants, Accesories, Shoes, 1337, Fashion, Studio'
				/>
				<meta name='author' content='Dani Istrati' />
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<Component {...pageProps} />
		</div>
	)
}

export default MyApp
