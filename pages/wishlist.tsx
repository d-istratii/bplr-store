import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import { IconContext } from 'react-icons/lib';
import { RiHeart2Fill } from 'react-icons/ri';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Provider } from 'react-redux';
import { store } from '../state/index';

export default function Wishlist() {
    return (
        <div>
            <Provider store={store}>
                <Navbar />
            </Provider>
            <div>
                <h1 className='flex justify-center bg-neutral-900 p-8 pt-24 text-white'>
                    SHOPPING BAG
                </h1>
                <div className='grid grid-cols-4 gap-4 bg-neutral-900 p-8 text-white'>
                    <div className='col-span-3 grid grid-cols-6 justify-between rounded bg-neutral-600 p-4 shadow-xl'>
                        <div>Product photo</div>

                        <div className='col-span-2'>
                            Product type and description
                        </div>

                        <div className='flex flex-col justify-start'>
                            <div className='font-bold'>189.99 €</div>
                            <div>VAT included</div>
                        </div>

                        <div className='col-span-2 flex flex-col justify-start'>
                            <div className='flex flex-row justify-between'>
                                <div>Size</div>
                                <button>X</button>
                            </div>

                            <div className='flex flex-row justify-start space-x-2'>
                                <div className='font-bold'>M</div>
                                <button className='underline'>Change</button>
                            </div>

                            <br></br>

                            <div>Quantity</div>
                            <div className='font-bold'>1</div>

                            <br></br>

                            <button className='flex flex-row justify-center space-x-2 rounded-lg bg-white p-3 text-black shadow-2xl duration-200 hover:scale-105'>
                                <div>Add to Watchlist</div>
                                <IconContext.Provider value={{ size: '20px' }}>
                                    <RiHeart2Fill />
                                </IconContext.Provider>
                            </button>
                        </div>
                    </div>

                    <div className='rounded bg-neutral-600 p-4 shadow-xl'>
                        <div className='flex flex-col'>
                            <h1 className='font-bold'>Summary</h1>
                            <br></br>
                            <div className='flex flex-row justify-between'>
                                <h3>Subtotal</h3>
                                <h3>189.99 €</h3>
                            </div>
                            <div className='flex flex-row justify-between'>
                                <h3>Delivery</h3>
                                <h3>9.99 €</h3>
                            </div>
                            <hr className='my-4'></hr>
                            <div className='flex flex-row justify-between'>
                                <h3>Total</h3>
                                <h4>
                                    EUR{' '}
                                    <span className='text-xl font-bold'>
                                        199.98 €
                                    </span>
                                </h4>
                            </div>
                            <div className='flex flex-row justify-end'>
                                VAT included
                            </div>
                        </div>
                    </div>

                    <div className='col-span-3 grid grid-cols-6 justify-between rounded bg-neutral-600 p-4 shadow-xl'>
                        <div>Product photo</div>

                        <div className='col-span-2'>
                            Product type and description
                        </div>

                        <div className='flex flex-col justify-start'>
                            <div className='font-bold'>189.99 €</div>
                            <div>VAT included</div>
                        </div>

                        <div className='col-span-2 flex flex-col justify-start'>
                            <div className='flex flex-row justify-between'>
                                <div>Size</div>
                                <button>X</button>
                            </div>

                            <div className='flex flex-row justify-start space-x-2'>
                                <div className='font-bold'>M</div>
                                <button className='underline'>Change</button>
                            </div>

                            <br></br>

                            <div>Quantity</div>
                            <div className='font-bold'>1</div>

                            <br></br>

                            <button className='flex flex-row justify-center space-x-2 rounded-lg bg-white p-3 text-black shadow-2xl duration-200 hover:scale-105'>
                                <div>Add to Watchlist</div>
                                <IconContext.Provider value={{ size: '20px' }}>
                                    <RiHeart2Fill />
                                </IconContext.Provider>
                            </button>
                        </div>
                    </div>

                    <button className='flex h-14 flex-row justify-center space-x-4 rounded bg-neutral-600 p-4 shadow-xl'>
                        <div>Proceed to Checkout</div>
                        <IconContext.Provider value={{ size: '20px' }}>
                            <AiOutlineArrowRight />
                        </IconContext.Provider>
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
}
