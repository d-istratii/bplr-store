import Atropos from 'atropos/react'
import Image from 'next/image'

export default function Steps() {
	return (
		<div>
			<div className='my-72 grid h-1/2 grid-cols-1 text-white sm:my-36 lg:grid-cols-2'>
				<div className='order-1 flex flex-col justify-center pl-24 text-right sm:px-12 sm:pb-24'>
					<h1 className='text-3xl'>Choose your design</h1>
					<h1 className='text-xl'>-</h1>
					<h3 className='text-md text-right text-neutral-400 md:text-lg'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, assumenda
						vitae commodi quasi ipsam autem, dolore maiores soluta id provident odit
						temporibus? Corrupti autem facilis voluptatibus porro excepturi quod non.
					</h3>
				</div>

				<div className='order-2 flex flex-col items-center justify-center'>
					{/* <Atropos activeOffset={40} shadowScale={1.05}>
						<Image
							src='/squigly-globe.png'
							height={360}
							width={360}
							data-atropos-offset='10'
							alt='whatever'
						/>
					</Atropos> */}
					<div
						className='
							mx-24 grid grid-cols-3 gap-6 
							rounded-2xl bg-neutral-600 p-6 shadow-2xl shadow-emerald-900/60 duration-200 hover:scale-110 sm:grid-cols-2 sm:grid-rows-3'
					>
						<div className='hover: rounded-md bg-neutral-400 p-8 duration-200 hover:-translate-y-2'></div>
						<div className='hover: rounded-md bg-neutral-400 p-8 duration-200 hover:-translate-y-2'></div>
						<div className='hover: rounded-md bg-neutral-400 p-8 duration-200 hover:-translate-y-2'></div>

						<div className='hover: rounded-md bg-neutral-400 p-8 duration-200 hover:translate-y-2'></div>
						<div className='hover: rounded-md bg-neutral-400 p-8 duration-200 hover:translate-y-2'></div>
						<div className='hover: rounded-md bg-neutral-400 p-8 duration-200 hover:translate-y-2'></div>
					</div>
				</div>
			</div>
		</div>
	)
}
