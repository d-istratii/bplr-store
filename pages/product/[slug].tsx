import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { data } from 'utils/data'
import { IconContext } from 'react-icons/lib'
import { RiHeart2Fill } from 'react-icons/ri'
import { AiOutlineShoppingCart, AiOutlineDown } from 'react-icons/ai'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper'
import Link from 'next/link'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'

export default function ProductPage() {
	const [dropdownClothingSize, setDropdownClothingSize] = useState(false)
	const [selectedSize, setSelectedSize] = useState('Select size')
	const router = useRouter()
	const { slug } = router.query
	const product = data.products.find(a => a.slug === slug)

	function computeDiscount(price: number, discount: number) {
		const result = Math.floor(price - price * discount)
		return result - 0.01
	}

	if (!product) {
		return <div>ERROR NO PRODUCT FOUND</div>
	}
	return (
		<div>
			<Navbar />
			<div className='grid h-screen grid-cols-2 place-content-center gap-16  bg-gradient-to-b from-neutral-900 to-neutral-800 pt-24 sm:grid-cols-1'>
				<button className='justify-self-end rounded-3xl bg-white text-white shadow-2xl duration-200 hover:scale-110 mb-4'>
					<div className='flex flex-col items-center justify-center pb-4'>
						{/* <img className='w-72 p-4' src={product.image} /> */}
						<button>
							<Swiper
								className='w-96 rounded-2xl bg-white'
								modules={[Navigation, Pagination, Autoplay]}
								slidesPerView={1}
								navigation
								// autoplay={{ delay: 3000 }}
								pagination={{ clickable: true, dynamicBullets: true }}
							>
								{/* T-shirts slides */}
								<SwiperSlide className='p-8'>
									<img src='https://cdn-images.farfetch-contents.com/16/52/41/00/16524100_32567051_1000.jpg'></img>
								</SwiperSlide>

								<SwiperSlide className='p-8'>
									<img src='https://cdn-images.farfetch-contents.com/16/60/53/51/16605351_32566794_1000.jpg'></img>
								</SwiperSlide>

								<SwiperSlide className='p-8'>
									<img src='https://cdn-images.farfetch-contents.com/16/60/53/51/16605351_32566794_1000.jpg'></img>
								</SwiperSlide>
							</Swiper>
						</button>
					</div>
				</button>

				<div className='flex flex-col items-center justify-center space-y-2 justify-self-start text-white'>
					<h1 className='font-bold'>{product.name}</h1>
					<h2>{product.description}</h2>
					<h3 className='py-4'>
						{product.discount > 0 ? (
							<div className='flex flex-row items-center space-x-1'>
								<p className='text-sm text-red-400 line-through'>
									{product.price - 0.01} €
								</p>
								<p className='text-sm text-red-400'>-{product.discount * 100}%</p>
								<p>{computeDiscount(product.price, product.discount)} €</p>
								<span className='ml-1 inline text-xs text-neutral-400'>
									(VAT included)
								</span>
							</div>
						) : (
							<div className='flex flex-row items-center space-x-1'>
								<p>{product.price} €</p>
								<span className='ml-1 inline text-xs text-neutral-400'>
									(VAT included)
								</span>
							</div>
						)}
					</h3>

					{dropdownClothingSize ? (
						<div>
							<div className='flex w-64 flex-row justify-between rounded border p-2 shadow-2xl'>
								<p>{selectedSize}</p>

								<motion.button
									onClick={() => {
										setDropdownClothingSize(!dropdownClothingSize)
									}}
									whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
									animate={{ rotate: dropdownClothingSize ? 0 : 180 }}
									className='ml-1 text-white sm:p-4'
								>
									<IconContext.Provider value={{ color: 'white', size: '16px' }}>
										<AiOutlineDown />
									</IconContext.Provider>
								</motion.button>
							</div>
						</div>
					) : (
						<div className='w-64 flex-col divide-y rounded border shadow-2xl'>
							<div className='flex flex-row justify-between p-2'>
								<p>Select size</p>
								<motion.button
									onClick={() => {
										setDropdownClothingSize(!dropdownClothingSize)
									}}
									whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
									animate={{ rotate: dropdownClothingSize ? 0 : 180 }}
									className='ml-1 text-white sm:p-4'
								>
									<IconContext.Provider value={{ color: 'white', size: '16px' }}>
										<AiOutlineDown />
									</IconContext.Provider>
								</motion.button>
							</div>

							<div className='flex flex-col items-center justify-center'>
								<button
									className='w-full p-1 hover:bg-neutral-700'
									onClick={() => {
										setDropdownClothingSize(!dropdownClothingSize)
										setSelectedSize('Selected size - S')
									}}
								>
									S
								</button>

								<button
									className='w-full p-1 hover:bg-neutral-700'
									onClick={() => {
										setDropdownClothingSize(!dropdownClothingSize)
										setSelectedSize('Selected size - M')
									}}
								>
									M
								</button>

								<button
									className='w-full p-1 hover:bg-neutral-700'
									onClick={() => {
										setDropdownClothingSize(!dropdownClothingSize)
										setSelectedSize('Selected size - L')
									}}
								>
									L
								</button>
							</div>
						</div>
					)}

					<div className='flex flex-row space-x-3 pt-4'>
						<button className='flex flex-row rounded-lg bg-white p-3 shadow-2xl duration-200 hover:scale-105'>
							<div className='text-neutral-900'>Add to bag</div>
							<div className='ml-2 text-neutral-900'>
								<IconContext.Provider value={{ size: '20px' }}>
									<AiOutlineShoppingCart />
								</IconContext.Provider>
							</div>
						</button>

						<button className='flex flex-row rounded-lg bg-white p-3 shadow-2xl duration-200 hover:scale-105'>
							<div className='text-neutral-900'>Wishlist</div>
							<div className='ml-2 text-neutral-900'>
								<IconContext.Provider value={{ size: '20px' }}>
									<RiHeart2Fill />
								</IconContext.Provider>
							</div>
						</button>
					</div>
				</div>
			</div>
			<div className='line absolute left-0 w-full overflow-hidden fill-neutral-800'>
				<svg
					data-name='Layer 1'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 1200 120'
					preserveAspectRatio='none'
				>
					<path d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'></path>
				</svg>
			</div>

			<div className='flex flex-col justify-center items-center text-white h-screen bg-neutral-900'>
				<h1>Description</h1>
			</div>

			<Footer />
		</div>
	)
}
