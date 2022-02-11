import { motion } from 'framer-motion'
import Link from 'next/link'

function Description() {
	return (
		<div className='flex h-screen w-full flex-col items-center justify-between space-y-4 bg-white bg-tshirt-img bg-cover bg-center p-4 text-lg text-white'>
			<div className='flex-none'></div>

			<div className='flex flex-col items-center space-y-2'>
				<div>T-SHIRTS</div>
				<div>MADE TO ORDER.</div>
				<Link href='/designer/t-shirts'>
					<motion.button
						whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
						className='rounded bg-neutral-900 py-2 px-6 font-bold text-white'
					>
						SHOP NOW
					</motion.button>
				</Link>
			</div>

			<div className='space-x-2'>
				<input type='radio' className='accent-black'></input>
			</div>
		</div>
	)
}

export default Description
