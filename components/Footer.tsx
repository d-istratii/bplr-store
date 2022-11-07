import { IconContext } from 'react-icons';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';

function Footer() {
    return (
        <div>
            {/* <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
                <path
                    fill='hsla(0,0%,9%,1)'
                    fill-opacity='1'
                    d='M0,64L60,90.7C120,117,240,171,360,176C480,181,600,139,720,122.7C840,107,960,117,1080,112C1200,107,1320,85,1380,74.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
                ></path>
            </svg> */}
            <footer className='grid h-fit grid-cols-3 place-items-center gap-4 bg-neutral-900 p-8 sm:grid-cols-2 sm:place-items-start sm:p-16'>
                {/* Shop */}
                <div className='flex flex-col text-white'>
                    <h1 className='font-bold'>SHOP</h1>
                    <h1 className='font-bold'>-</h1>
                    <Link href='/designer'>All Products</Link>
                    <Link href='/tshirts'>T-Shirts</Link>
                    <Link href='/shirts'>Shirts</Link>
                    <Link href='/accessories'>Accessories</Link>
                    <Link href='/pants'>Pants</Link>
                    <Link href='/shoes'>Shoes</Link>
                </div>

                {/* Support */}
                <div className='flex flex-col text-white'>
                    <h1 className='font-bold'>SUPPORT</h1>
                    <h1 className='font-bold'>-</h1>
                    <Link href='/about'>About</Link>
                    <Link href='/sizing'>Sizing</Link>
                    <Link href='/terms-and-conditions'>Terms Policy</Link>
                    <Link href='/shipping'>Shipping Policy</Link>
                    <Link href='/refund'>Refund Policy</Link>
                    <Link href='/faq'>FAQ</Link>
                </div>

                {/* Social & Disclaimer  */}
                <div className='flex flex-col items-center space-y-0 text-white sm:items-start'>
                    <motion.button
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.3 },
                        }}
                        className='text-2xl font-black tracking-tighter text-white shadow-red-400 drop-shadow-2xl'
                    >
                        <Link href='/'>1337</Link>
                    </motion.button>

                    <div className='text-xs'>Ⓒ 1337 STUDIO | 2022</div>

                    <div className='text-4xl'>-</div>

                    <div className='space-x-4'>
                        <IconContext.Provider
                            value={{ size: '24px', color: 'white' }}
                        >
                            <button>
                                <FaInstagram />
                            </button>
                        </IconContext.Provider>

                        <IconContext.Provider
                            value={{ size: '24px', color: 'white' }}
                        >
                            <button>
                                <FaFacebook />
                            </button>
                        </IconContext.Provider>

                        <IconContext.Provider
                            value={{ size: '24px', color: 'white' }}
                        >
                            <button>
                                <FaTwitter />
                            </button>
                        </IconContext.Provider>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
