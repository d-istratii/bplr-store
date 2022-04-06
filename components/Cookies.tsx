import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Cookies() {
	const [cookiesModal, setCookiesModal] = useState(true)
	return (
		<div>
			{cookiesModal ? (
				<div>
					<div className='absolute inset-0 z-20 bg-black opacity-50'></div>
					<motion.div
						animate={{ y: 0, opacity: 1 }}
						initial={{ y: 100, opacity: 0 }}
						transition={{ duration: 0.45, delay: 0.55 }}
						className='items-left visible fixed bottom-4 right-4 z-20 flex h-48 w-96 flex-col justify-between space-y-3 rounded-xl bg-neutral-800 p-6 text-white shadow-2xl sm:bottom-0 sm:right-0'
					>
						<h1>We use Cookies</h1>
						<section>
							<h5>
								Cookies enhance your experience, tailor your ads and improve our
								website.
							</h5>
						</section>
						<div className='flex flex-row-reverse'>
							<button
								className='rounded-lg bg-white p-3 font-bold text-neutral-900 shadow-2xl'
								onClick={e => setCookiesModal(false)}
							>
								Accept All
							</button>
							<button
								className='mr-3 rounded-lg bg-neutral-800 p-3 font-bold hover:bg-neutral-600 hover:shadow-2xl'
								onClick={e => setCookiesModal(false)}
							>
								Necessary Only
							</button>
						</div>
					</motion.div>
				</div>
			) : null}
		</div>
	)
}
