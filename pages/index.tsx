import Navbar from 'components/Navbar'
import Slider from 'components/Swiper'
import Contact from 'components/Contact'
import Newsletter from 'components/Newsletter'
import Steps from 'components/Steps'
import Footer from 'components/Footer'
import Cookies from 'components/Cookies'

export default function Home() {
	return (
		<div className='bg-neutral-900 font-Sora'>
			<Navbar />
			<Slider />
			<Contact />
			<Newsletter />
			<Steps />
			<Footer />
			<Cookies />
		</div>
	)
}
