import Navbar from 'components/Navbar'
import Slider from 'components/Swiper'
import Contact from 'components/Contact'
import Footer from 'components/Footer'
import CircleLoader from 'react-spinners/CircleLoader'
import { useState, useEffect } from 'react'

export default function Cart() {
	const [loading, setLoading] = useState(true)

	function loadApp() {
		setLoading(false)
		console.log('LOADED')
	}
	useEffect(() => {
		window.addEventListener('load', loadApp)
	}, [])

	return (
		<div>
			{loading ? (
				<div className='flex h-screen flex-row items-center justify-center bg-neutral-900 font-Sora'>
					<CircleLoader color='white' size={100} />
				</div>
			) : (
				<div className='bg-neutral-900 font-Sora'>
					<Navbar />
					<Slider />
					<Contact />
					<Footer />
				</div>
			)}
		</div>
	)
}
