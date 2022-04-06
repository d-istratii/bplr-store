import React from 'react'
import { IconContext } from 'react-icons'
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Link from 'next/link'

function Footer() {
	return (
		<footer className='grid h-fit grid-cols-3 place-items-center gap-4 bg-neutral-900 p-8 sm:grid-cols-2 sm:place-items-start sm:p-16'>
			{/* Shop */}
			<div className='flex flex-col text-white'>
				<h1 className='font-bold'>SHOP</h1>
				<h1 className='font-bold'>-</h1>
				<Link href='/designer'>All Products</Link>
				<Link href='/tshirts'>T-Shirts</Link>
				<Link href='/shirts'>Shirts</Link>
				<Link href='/accessories'>Accessories</Link>
				<Link href='/pants'>Pants</Link>
				<Link href='/shoes'>Shoes</Link>
			</div>

			{/* Support */}
			<div className='flex flex-col text-white'>
				<h1 className='font-bold'>SUPPORT</h1>
				<h1 className='font-bold'>-</h1>
				<Link href='/about'>About</Link>
				<Link href='/sizing'>Sizing</Link>
				<Link href='/terms-and-conditions'>Terms Policy</Link>
				<Link href='/shipping'>Shipping Policy</Link>
				<Link href='/refund'>Refund Policy</Link>
				<Link href='/faq'>FAQ</Link>
			</div>

			{/* Social & Disclaimer  */}
			<div className='flex flex-col items-center space-y-0 text-white sm:items-start'>
				<motion.button
					whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
					className='text-2xl font-black tracking-tighter text-white shadow-red-400 drop-shadow-2xl'
				>
					<Link href='/'>1337</Link>
				</motion.button>

				<div className='text-xs'>Ⓒ 1337 STUDIO | 2022</div>

				<div className='text-4xl'>-</div>

				<div className='space-x-4'>
					<IconContext.Provider value={{ size: '24px', color: 'white' }}>
						<button>
							<FaInstagram />
						</button>
					</IconContext.Provider>

					<IconContext.Provider value={{ size: '24px', color: 'white' }}>
						<button>
							<FaFacebook />
						</button>
					</IconContext.Provider>

					<IconContext.Provider value={{ size: '24px', color: 'white' }}>
						<button>
							<FaTwitter />
						</button>
					</IconContext.Provider>
				</div>
			</div>
		</footer>
	)
}

export default Footer
