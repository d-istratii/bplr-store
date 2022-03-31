import ScrollLock from 'react-scrolllock'
import { useState } from 'react'
export default function Cookies() {
	const [cookiesModal, setCookiesModal] = useState(true)
	return (
		<div>
			{cookiesModal ? (
				<div>
					<ScrollLock isActive={cookiesModal} />
					<div className='absolute inset-0 z-20 bg-black opacity-50'></div>
					<div className='items-left visible fixed bottom-4 right-8 z-20 flex h-48 w-96 flex-col justify-between space-y-3 rounded-xl bg-neutral-800 p-6 text-white shadow-2xl'>
						<h1>We use Cookies</h1>
						<h5>
							Cookies enhance your experience, tailor your ads and improve our website.
						</h5>
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
					</div>
				</div>
			) : null}
		</div>
	)
}
