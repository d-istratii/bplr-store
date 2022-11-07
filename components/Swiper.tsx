import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { motion } from 'framer-motion';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function Slider() {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                navigation
                // autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
            >
                {/* T-shirts slides */}
                <SwiperSlide>
                    <div className='z-0 flex h-screen w-full flex-col items-center justify-between space-y-4 bg-tshirt-img bg-cover         bg-center p-4 text-lg text-white'>
                        <div className='flex-none'></div>
                        <div className='flex flex-col items-center space-y-2'>
                            <h1 className='text-8xl sm:text-5xl'>T-SHIRTS</h1>
                            <h1 className='bg-gradient-to-r from-indigo-600 to-rose-300 bg-clip-text text-6xl font-extrabold text-transparent sm:text-3xl'>
                                MADE TO ORDER
                            </h1>
                            <Link href='/designer/t-shirts' passHref>
                                <motion.button
                                    whileHover={{
                                        scale: 1.1,
                                        transition: { duration: 0.3 },
                                    }}
                                    className='rounded bg-white py-2 px-6 font-bold text-neutral-900'
                                >
                                    SHOP NOW
                                </motion.button>
                            </Link>
                        </div>

                        <div></div>
                    </div>
                </SwiperSlide>

                {/* Shirts slide */}
                <SwiperSlide>
                    <div className='z-0 flex h-screen w-full flex-col items-center justify-between space-y-4 bg-shirts-img bg-cover bg-center p-4 text-lg text-white'>
                        <div className='flex-none'></div>
                        <div className='flex flex-col items-center space-y-2'>
                            <h1 className='text-8xl sm:text-5xl'>SHIRTS</h1>
                            <h1 className='bg-gradient-to-r from-indigo-600 to-rose-300 bg-clip-text text-6xl font-extrabold text-transparent sm:text-3xl'>
                                MADE TO ORDER
                            </h1>
                            <Link href='/designer/t-shirts' passHref>
                                <motion.button
                                    whileHover={{
                                        scale: 1.1,
                                        transition: { duration: 0.3 },
                                    }}
                                    className='rounded bg-white py-2 px-6 font-bold text-neutral-900'
                                >
                                    SHOP NOW
                                </motion.button>
                            </Link>
                        </div>

                        <div></div>
                    </div>
                </SwiperSlide>

                {/* Accessories slide */}
                <SwiperSlide>
                    <div className='z-0 flex h-screen w-full flex-col items-center justify-between space-y-4  bg-accessories-img bg-cover bg-center object-left p-4 text-lg text-white sm:bg-right'>
                        <div className='flex-none'></div>
                        <div className='flex flex-col items-center space-y-2'>
                            <h1 className='text-8xl sm:text-4xl'>
                                ACCESSORIES
                            </h1>
                            <h1 className='bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-6xl font-extrabold text-transparent sm:text-3xl'>
                                MADE TO ORDER
                            </h1>
                            <Link href='/designer/t-shirts' passHref>
                                <motion.button
                                    whileHover={{
                                        scale: 1.1,
                                        transition: { duration: 0.3 },
                                    }}
                                    className='rounded bg-neutral-900 py-2 px-6 font-bold text-white'
                                >
                                    SHOP NOW
                                </motion.button>
                            </Link>
                        </div>
                        <div className='flex-none'></div>
                    </div>
                </SwiperSlide>

                {/* Pants slide */}
                <SwiperSlide>
                    <div className='z-0 flex h-screen w-full flex-col items-center justify-between space-y-4  bg-pants-img bg-cover bg-center p-4 text-lg text-white sm:bg-right'>
                        <div className='flex-none'></div>
                        <div className='flex flex-col items-center space-y-2'>
                            <h1 className='text-8xl text-neutral-900 sm:text-5xl'>
                                PANTS
                            </h1>
                            <h1 className='text-6xl font-extrabold text-neutral-900 sm:text-3xl'>
                                MADE TO ORDER
                            </h1>
                            <Link href='/designer/t-shirts' passHref>
                                <motion.button
                                    whileHover={{
                                        scale: 1.1,
                                        transition: { duration: 0.3 },
                                    }}
                                    className='rounded bg-neutral-900 py-2 px-6 font-bold text-white'
                                >
                                    SHOP NOW
                                </motion.button>
                            </Link>
                        </div>

                        <div></div>
                    </div>
                </SwiperSlide>

                {/* Shoes slide */}
                <SwiperSlide>
                    <div className='z-0 flex h-screen w-full flex-col items-center justify-between space-y-4  bg-shoes-img bg-cover bg-center p-4 text-lg text-white'>
                        <div className='flex-none'></div>
                        <div className='flex flex-col items-center space-y-2'>
                            <h1 className='text-8xl sm:text-5xl'>SHOES</h1>
                            <h1 className='bg-gradient-to-l from-slate-200 to-neutral-400 bg-clip-text text-6xl font-extrabold text-transparent sm:text-3xl'>
                                MADE TO ORDER
                            </h1>
                            <Link href='/designer/t-shirts' passHref>
                                <motion.button
                                    whileHover={{
                                        scale: 1.1,
                                        transition: { duration: 0.3 },
                                    }}
                                    className='rounded bg-white py-2 px-6 font-bold text-neutral-900'
                                >
                                    SHOP NOW
                                </motion.button>
                            </Link>
                        </div>

                        <div></div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
