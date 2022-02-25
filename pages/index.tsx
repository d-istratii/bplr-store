import { useState, useEffect } from 'react'
import CircleLoader from 'react-spinners/CircleLoader'
import Navbar from 'components/Navbar'
import Slider from 'components/Swiper'
import Contact from 'components/Contact'
import Newsletter from 'components/Newsletter'
import Footer from 'components/Footer'

export default function Home() {
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setTimeout(() => setLoading(false), 1000)
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
					<Newsletter />
					<Footer />
				</div>
			)}
		</div>
	)
}
