import { data } from 'utils/data'
import { IconContext } from 'react-icons/lib'
import { RiHeart2Fill } from 'react-icons/ri'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Link from 'next/link'

export default function TestComponent() {
	return (
		<div className='grid grid-cols-2 place-content-center gap-8 bg-gradient-to-b from-neutral-700 to-neutral-900 px-24 py-16 pt-24 sm:grid-cols-1 md:grid-cols-3'>
			{data.products.map((product: any) => (
				<Link href={`/product/${product.slug}`}>
					<button className='rounded-3xl bg-white text-white shadow-2xl duration-200 hover:scale-105'>
						<div className='flex flex-col items-center justify-center pb-4'>
							<img className='w-72 p-4' src={product.image} />
							<h3 className='py-1 px-4 pb-4 font-bold text-neutral-900'>
								{product.price}
							</h3>
							<div className='flex flex-row gap-4'>
								<div className='rounded-xl bg-neutral-900 p-2 hover:bg-neutral-500'>
									<IconContext.Provider value={{ color: 'white', size: '20px' }}>
										<RiHeart2Fill />
									</IconContext.Provider>
								</div>

								<div className='rounded-xl bg-neutral-900 p-2 hover:bg-neutral-500'>
									<IconContext.Provider value={{ size: '20px' }}>
										<AiOutlineShoppingCart />
									</IconContext.Provider>
								</div>
							</div>
						</div>
					</button>
				</Link>
			))}
		</div>
	)
}
