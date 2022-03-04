import Navbar from 'components/Navbar'
import Slider from 'components/Swiper'
import Contact from 'components/Contact'
import Footer from 'components/Footer'
import CircleLoader from 'react-spinners/CircleLoader'
import { useState, useEffect } from 'react'

export default function Cart() {
	return (
		<div className='bg-neutral-900 font-Sora'>
			<Navbar />
			<Slider />
			<Contact />
			<Footer />
		</div>
	)
}
