import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ScrollLock from 'react-scrolllock'

export default function Cookies() {
	const [cookiesModal, setCookiesModal] = useState(true)
	const acceptCookies = useRef<HTMLButtonElement>(null)

	useEffect(() => {
		acceptCookies.current?.focus()
	}, [])

	return (
		<div>
			{cookiesModal ? (
				<ScrollLock>
					<div>
						<div className='absolute inset-0 z-20 bg-black opacity-50'></div>
						<motion.div
							animate={{ y: 0, opacity: 1 }}
							initial={{ y: 100, opacity: 0 }}
							transition={{ duration: 0.45, delay: 0.55 }}
							className='items-left visible fixed right-4 sm:right-0 sm:w-screen bottom-4 z-20 flex h-48 w-96 flex-col justify-between space-y-3 rounded-xl bg-neutral-800 p-6 text-white shadow-2xl'
						>
							<div className='flex flex-row justify-between'>
								<h1>We use Cookies</h1>
								<motion.button
									className='rounded-md px-2 text-2xl hover:bg-neutral-700 active:bg-neutral-600'
									onClick={() => setCookiesModal(false)}
									whileHover={{ scale: 1.33 }}
								>
									×
								</motion.button>
							</div>
							<section>
								<h5>
									Cookies enhance your experience, tailor your ads and improve our
									website.
								</h5>
							</section>
							<div className='flex flex-row-reverse'>
								<button
									className='rounded-lg bg-white p-3 font-bold text-neutral-900 shadow-2xl outline focus:outline-offset-4 outline-neutral-400'
									onClick={e => setCookiesModal(false)}
									ref={acceptCookies}
								>
									Accept All
								</button>

								<button
									className='mr-3 rounded-lg bg-neutral-800 p-3 font-bold hover:bg-neutral-700 active:bg-neutral-600 hover:shadow-2xl'
									onClick={e => setCookiesModal(false)}
								>
									Necessary Only
								</button>
							</div>
						</motion.div>
					</div>
				</ScrollLock>
			) : null}
		</div>
	)
}
