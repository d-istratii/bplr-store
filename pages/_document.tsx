import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html>
			<Head>
				<link
					href='https://fonts.googleapis.com/css2?family=Sora:wght@300&display=swap'
					rel='stylesheet'
				/>
				<meta charSet='UTF-8' />
				<meta name='description' content='1337 Fashion Studio' />
				<meta
					name='keywords'
					content='Tshirts, Shirts, Pants, Accesories, Shoes, 1337, Fashion, Studio'
				/>
				<meta name='author' content='Dani Istrati' />
			</Head>
			<body className='font-Sora'>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
