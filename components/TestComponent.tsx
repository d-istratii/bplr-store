export default function TestComponent() {
	return (
		<div className='grid h-screen grid-rows-2 gap-4 bg-neutral-900 p-8 md:grid-cols-2 md:grid-rows-none'>
			<div className='relative flex flex-col items-center justify-center bg-neutral-800'>
				<div className='bg- bg-heropattern absolute left-1/2 h-1/2 w-1/4 bg-neutral-700'></div>
				<div className='absolute top-1/3 ml-8 h-1/2 w-1/4 bg-neutral-600'></div>
				<div className='absolute left-1/4 top-1/4  h-1/2 w-1/4 bg-neutral-500'></div>
				<div className='absolute bottom-1/3 mr-8 h-1/2 w-1/4 bg-neutral-400'></div>
			</div>

			<div className='flex flex-col items-center justify-center bg-neutral-800'>
				<h1 className='p-8 text-white'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus et
					deserunt, fugiat ipsa repellendus odit. Ipsa explicabo eum iusto
					perspiciatis quis maiores optio omnis eveniet. Quia, quas ipsam. Numquam,
					rerum.
				</h1>
			</div>
		</div>
	)
}
