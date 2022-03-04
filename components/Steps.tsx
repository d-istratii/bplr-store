import Atropos from 'atropos/react'
import Image from 'next/image'

export default function Steps() {
	return (
		<div>
			<div className='mt-36 mb-24 grid h-1/2 grid-cols-1 text-white lg:grid-cols-2'>
				<div className='order-1 flex flex-col justify-center pl-24 text-right'>
					<h1 className='text-3xl'>Choose your design</h1>
					<h1 className='text-xl'>-</h1>
					<h3 className='text-md text-right text-neutral-400 md:text-lg'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, assumenda
						vitae commodi quasi ipsam autem, dolore maiores soluta id provident odit
						temporibus? Corrupti autem facilis voluptatibus porro excepturi quod non.
					</h3>
				</div>

				<div className='order-2 flex flex-col items-center justify-center'>
					{/* <svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
						<path
							fill='#262626'
							d='M39.9,-32.4C52.9,-27,65.3,-13.5,63.8,-1.5C62.2,10.4,46.7,20.8,33.8,31.4C20.8,42,10.4,52.8,-4.5,57.3C-19.4,61.8,-38.8,60,-51.7,49.4C-64.5,38.8,-70.8,19.4,-71.8,-1C-72.8,-21.4,-68.4,-42.7,-55.6,-48.2C-42.7,-53.7,-21.4,-43.3,-3.9,-39.4C13.5,-35.4,27,-37.9,39.9,-32.4Z'
							transform='translate(100 100)'
						/>
					</svg> */}
					<Atropos activeOffset={40} shadowScale={1.05}>
						<Image
							src='/squigly-globe.png'
							height={360}
							width={360}
							data-atropos-offset='10'
							alt='whatever'
						/>
					</Atropos>
					{/* <div
						className='
							mx-24 grid grid-cols-5 gap-6 
							rounded-2xl bg-neutral-600 p-6 shadow-2xl shadow-emerald-900/60 duration-200 hover:scale-110 sm:grid-cols-2 sm:grid-rows-5'
					>
						<div className='hover: rounded-md bg-neutral-400 p-8 duration-200 hover:-translate-y-2'></div>
						<div className='hover: rounded-md bg-neutral-400 p-8 duration-200 hover:-translate-y-2'></div>
						<div className='hover: rounded-md bg-neutral-400 p-8 duration-200 hover:-translate-y-2'></div>
						<div className='hover: rounded-md bg-neutral-400 p-8 duration-200 hover:-translate-y-2'></div>
						<div className='hover: rounded-md bg-neutral-400 p-8 duration-200 hover:-translate-y-2'></div>

						<div className='hover: rounded-md bg-neutral-400 p-8 duration-200 hover:translate-y-2'></div>
						<div className='hover: rounded-md bg-neutral-400 p-8 duration-200 hover:translate-y-2'></div>
						<div className='hover: rounded-md bg-neutral-400 p-8 duration-200 hover:translate-y-2'></div>
						<div className='hover: rounded-md bg-neutral-400 p-8 duration-200 hover:translate-y-2'></div>
						<div className='hover: rounded-md bg-neutral-400 p-8 duration-200 hover:translate-y-2'></div>
					</div> */}
				</div>
			</div>
		</div>
	)
}
