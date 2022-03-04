// import 'styles/globals.css'
// import type { AppProps } from 'next/app'
// import Head from 'next/head'
// import { useRouter } from 'next/router'
// import { useState, useEffect } from 'react'
// import { CircleLoader } from 'react-spinners'

// function MyApp({ Component, pageProps }: AppProps) {
// 	const router = useRouter()
// 	const [pageLoading, setPageLoading] = useState<boolean>(false)
// 	useEffect(() => {
// 		const handleStart = () => {
// 			setPageLoading(true)
// 			console.log('STARTED')
// 			console.log(pageLoading)
// 		}
// 		const handleComplete = () => {
// 			setPageLoading(false)
// 			console.log('LOADED')
// 			console.log(pageLoading)
// 		}

// 		router.events.on('routeChangeStart', handleStart)
// 		router.events.on('routeChangeComplete', handleComplete)
// 		router.events.on('routeChangeError', handleComplete)
// 	}, [router])

// 	return (
// 		<div>
// 			<Head>
// 				<title>1337 | STUDIO</title>
// 				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
// 			</Head>

// 			{pageLoading ? (
// 				<div className='flex h-screen flex-row items-center justify-center bg-neutral-900 font-Sora'>
// 					<CircleLoader color='white' size={100} />
// 				</div>
// 			) : (
// 				<Component {...pageProps} />
// 			)}
// 		</div>
// 	)
// }

// export default MyApp

import 'styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useState, useEffect, useLayoutEffect } from 'react'
import Loading from 'components/Loading'

function MyApp({ Component, pageProps }: AppProps) {
	const useIsomorphicLayoutEffect =
		typeof window !== 'undefined' ? useLayoutEffect : useEffect

	const [loading, setLoading] = useState(true)

	const handleLoad = () => {
		console.log('SI-A DAT LOAD')
		setLoading(false)
	}
	useIsomorphicLayoutEffect(() => {
		window.addEventListener('load', handleLoad)
		return () => {
			window.removeEventListener('load', handleLoad)
		}
	}, [])
	return (
		<div>
			<Head>
				<title>1337 | STUDIO</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>

			{!loading ? <Component {...pageProps} /> : <Loading />}
		</div>
	)
}

export default MyApp
