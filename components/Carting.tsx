import { IconContext } from 'react-icons/lib';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { data } from 'utils/data';
import { motion } from 'framer-motion';

function Carting() {
    function computeDiscount(price: number, discount: number): number {
        const result = Math.floor(price - price * discount);
        return result - 0.01;
    }
    return (
        <div>
            <h1 className='flex flex-col items-center justify-center  pt-36 pb-16 text-5xl font-bold tracking-tight text-white'>
                SHOPPING BAG
            </h1>
            <div className='flex flex-row items-start justify-center space-x-6 border-b-2  text-white'>
                <div className='mb-8 flex flex-col space-y-8'>
                    {data.products.map((product: any) => (
                        <div
                            key={product}
                            className='flex flex-col space-y-6 rounded bg-neutral-600 p-6'
                        >
                            <div className='flex flex-row justify-between'>
                                <motion.button
                                    className='invisible w-8 rounded-md bg-neutral-400 text-2xl hover:bg-white hover:text-black active:bg-neutral-800 active:text-white'
                                    whileHover={{
                                        scale: 1.33,
                                    }}
                                >
                                    ×
                                </motion.button>
                                <div className='text-3xl font-bold tracking-tighter'>
                                    {product.slug}
                                </div>
                                <motion.button
                                    className='w-8 rounded-md bg-neutral-400 text-2xl shadow-md hover:bg-white hover:text-black active:bg-neutral-800 active:text-white'
                                    whileHover={{
                                        scale: 1.33,
                                    }}
                                >
                                    ×
                                </motion.button>
                            </div>

                            <div>
                                <div className='rounded-xl shadow-2xl'>
                                    <img
                                        src={product.image}
                                        className='rounded-xl'
                                        alt='fsdaf'
                                        height={480}
                                        width={360}
                                    ></img>
                                </div>
                            </div>

                            {product.discount > 0 ? (
                                <div className='flex flex-row items-center justify-around space-x-4'>
                                    <div className='flex flex-col items-center space-x-1'>
                                        <p className='text-lg'>
                                            €{' '}
                                            {computeDiscount(
                                                product.price,
                                                product.discount
                                            )}
                                        </p>
                                        <div className='flex flex-row  space-x-2'>
                                            <p className='text-sm text-red-400 line-through'>
                                                € {product.price - 0.01}
                                            </p>
                                            <p className='text-sm text-red-400'>
                                                -{product.discount * 100}%
                                            </p>
                                        </div>

                                        <span className='ml-1 inline text-xs text-neutral-300'>
                                            (VAT included)
                                        </span>
                                        <div className='mt-2 flex flex-row space-x-4'>
                                            <button className='rounded bg-neutral-400 px-2 shadow-md active:bg-neutral-800 active:text-white'>
                                                -
                                            </button>
                                            <div>{product.quantity}2</div>
                                            <button className='rounded bg-neutral-400 px-2 shadow-md active:bg-neutral-800 active:text-white'>
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    <div className='flex flex-col items-center tracking-tighter'>
                                        <div className='text-lg text-white'>
                                            Subtotal
                                        </div>
                                        <h1 className='font-bold'>-</h1>
                                        <div className='text-xl'>
                                            €{' '}
                                            {computeDiscount(
                                                product.price,
                                                product.discount
                                            ) * 2}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className='flex flex-row items-center justify-around space-x-4'>
                                    <div className='flex flex-col items-center  space-x-1'>
                                        <p className='text-lg'>
                                            € {product.price - 0.01}
                                        </p>
                                        <span className='ml-1 inline text-xs text-neutral-300'>
                                            (VAT included)
                                        </span>
                                        <div className='mt-2 flex flex-row space-x-4'>
                                            <button className='rounded bg-neutral-400 px-2 shadow-md active:bg-neutral-800 active:text-white'>
                                                -
                                            </button>
                                            <div>{product.quantity}0</div>
                                            <button className='rounded  bg-neutral-400 px-2 shadow-md active:bg-neutral-800 active:text-white'>
                                                +
                                            </button>
                                        </div>
                                        <div></div>
                                    </div>
                                    <div className='flex flex-col items-center tracking-tighter'>
                                        <div className='text-lg text-white'>
                                            Subtotal
                                        </div>
                                        <h1 className='font-bold'>-</h1>
                                        <div className='text-xl'>
                                            €{' '}
                                            {computeDiscount(
                                                product.price,
                                                product.discount
                                            ) * 2}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className='sticky top-32 h-1/3 w-1/4 rounded bg-neutral-600 p-4 shadow-xl'>
                    <div className='flex flex-col'>
                        <h1 className='font-bold'>Summary</h1>
                        <br></br>
                        <div className='flex flex-row justify-between'>
                            <h3>Subtotal</h3>
                            <h3>€ 189.99 </h3>
                        </div>
                        <div className='flex flex-row justify-between'>
                            <h3>Delivery</h3>
                            <h3>€ 9.99</h3>
                        </div>
                        <hr className='my-4'></hr>
                        <div className='flex flex-row justify-between'>
                            <h3>Total</h3>
                            <h4>
                                <span className='text-xl font-bold'>
                                    € 199.98
                                </span>
                            </h4>
                        </div>

                        <div className='flex flex-row justify-end text-xs text-neutral-300'>
                            (VAT included)
                        </div>
                    </div>

                    <button className='mt-4 flex h-14 w-full flex-row justify-center space-x-4 rounded bg-white p-4 text-neutral-600 shadow-xl'>
                        <div>Proceed to Checkout</div>
                        <IconContext.Provider value={{ size: '20px' }}>
                            <AiOutlineArrowRight />
                        </IconContext.Provider>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Carting;
