import React from 'react'

export default function Newsletter() {
	return (
		<div className='flex items-center justify-center bg-neutral-900 bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 p-16'>
			<div className='flex w-fit flex-col items-center space-y-8 rounded-2xl bg-neutral-700 px-48 py-16 shadow-2xl sm:w-96 sm:px-8 sm:py-8'>
				<div className='text-2xl font-bold text-white'>NEWSLETTER</div>

				<div className='text-neutral-300'>
					Subscribe to receive updates, access to exclusive deals, and more.
				</div>

				<div className='flex flex-row rounded-xl bg-neutral-600 p-3 shadow-xl sm:w-72 sm:flex-col sm:items-center sm:justify-center sm:space-y-4 sm:p-4'>
					<input
						type='text'
						placeholder='Your email'
						className='bg-neutral-600 px-4 text-white placeholder-white outline-none  sm:w-48'
					/>

					<button
						type='button'
						className='rounded-xl border border-neutral-300 bg-neutral-700 py-2.5 px-5 text-sm font-bold text-neutral-300 shadow-lg hover:bg-neutral-300 hover:text-neutral-700 focus:z-10 focus:bg-neutral-900 focus:hover:text-white sm:px-4'
					>
						Subscribe
					</button>
				</div>
			</div>
		</div>
	)
}
