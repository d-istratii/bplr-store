import { IconContext } from 'react-icons'
import { RiHeart2Fill } from 'react-icons/ri'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Image from 'next/image'

export default function TShirtsProducts() {
	return (
		<div className='grid grid-cols-2 place-content-center gap-8 bg-gradient-to-b from-neutral-800 to-neutral-900 px-24 pt-36 pb-16 sm:grid-cols-1 md:grid-cols-3'>
			<div className='rounded-xl bg-neutral-700 text-white shadow-2xl duration-200 hover:scale-105'>
				<div className='flex flex-col items-center justify-center pb-4'>
					<div className='block h-1/3 p-4'>
						<Image
							src='https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
							className='rounded-xl'
							height={540}
							width={480}
						></Image>
					</div>
					<div className='flex h-1/3 flex-row gap-4'>
						<h1 className='text-bold py-1 px-4'>$ 199.99</h1>
						<div className='rounded-xl bg-neutral-600 p-2 hover:bg-neutral-500'>
							<IconContext.Provider value={{ color: 'white', size: '24px' }}>
								<RiHeart2Fill />
							</IconContext.Provider>
						</div>

						<div className='rounded-xl bg-neutral-600 p-2 hover:bg-neutral-500'>
							<IconContext.Provider value={{ size: '24px' }}>
								<AiOutlineShoppingCart />
							</IconContext.Provider>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
