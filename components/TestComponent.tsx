import { data } from 'utils/data'
import { IconContext } from 'react-icons/lib'
import { RiHeart2Fill } from 'react-icons/ri'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Link from 'next/link'

export default function TestComponent() {
	return (
		<div className='grid grid-cols-2 place-content-center gap-8 bg-gradient-to-b from-neutral-800 to-neutral-900 px-24 py-16 sm:grid-cols-1 md:grid-cols-3'>
			{data.products.map((product: any) => (
				<Link href={`/designer/tshirts/${product.slug}`}>
					<button className='rounded-xl bg-neutral-700 text-white shadow-2xl duration-200 hover:scale-105'>
						<div className='flex flex-col items-center justify-center pb-4'>
							<img className='rounded-xl p-4' src={product.image} />
							<div className='flex h-1/3 flex-row gap-4'>
								<h1 className='text-bold py-1 px-4'>${product.price}</h1>
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
					</button>
				</Link>
			))}
		</div>
	)
}
