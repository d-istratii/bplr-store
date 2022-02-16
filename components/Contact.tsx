import React from 'react'

function Contact() {
	return (
		<div className='grid h-64 grid-cols-2 gap-4 bg-neutral-900 p-4 sm:h-screen sm:grid-cols-1'>
			<div className='rounded-3xl bg-neutral-800 px-8 py-4 shadow-xl'>
				<div className='text-2xl font-bold text-white'>NEWSLETTER</div>
				<div className='text-white'>
					Subscribe to receive updates, access to exclusive deals, and more.
				</div>
				<div className='text-2xl font-bold text-white'>-</div>
				<div className='flex flex-col'>
					<input
						className='w-full rounded-xl py-3 px-6 placeholder-neutral-900 placeholder-opacity-50'
						type='text'
						placeholder='jane.smith@example.com'
					/>
				</div>
				<div className='flex flex-row justify-center'>
					<button
						type='button'
						className='mt-4 rounded-xl border border-gray-200 bg-neutral-700 py-2.5 px-5 text-sm font-medium text-white shadow-xl hover:bg-gray-100 hover:text-neutral-700 focus:z-10 focus:bg-slate-500 focus:hover:text-white'
					>
						SUBSCRIBE
					</button>
				</div>
			</div>
			<div className='rounded-3xl bg-neutral-800 p-16 shadow-xl'></div>
		</div>
	)
}

export default Contact
