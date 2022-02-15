import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Dropdown from './Dropdown'
import Login from './Login'
import Modal from '@mui/material/Modal'
import { IconContext } from 'react-icons'
import { RiAccountCircleLine, RiHeart2Line } from 'react-icons/ri'
import { AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai'

function Navbar(props: any) {
	const [loginModal, setLoginModal] = useState(false)

	const openModal = () => {
		setLoginModal(prev => !prev)
	}

	return (
		<div>
			<Modal
				className='font-Sora'
				open={loginModal}
				onClose={() => setLoginModal(false)}
			>
				<Login loginModal={loginModal} setLoginModal={setLoginModal} />
			</Modal>

			<nav className='from fixed inset-x-0 top-0 z-10 flex h-16 items-center justify-between bg-gradient-to-b from-neutral-900 p-4'>
				<div className='flex space-x-4'>
					<Dropdown>
						<motion.div
							animate={{ y: 12 }}
							transition={{ ease: 'easeOut', duration: 0.4 }}
							className='absolute ml-2 mt-1 flex flex-col items-start space-y-3 text-white'
						>
							<motion.button whileHover={{ scale: 1.05 }}>
								<Link href='/designer/tshirts'>T-SHIRTS - SHORT SLEEVES</Link>
							</motion.button>

							<motion.button whileHover={{ scale: 1.05 }}>
								<Link href='/designer/shirts'>SHIRTS - LONG SLEEVES</Link>
							</motion.button>

							<motion.button whileHover={{ scale: 1.05 }}>
								<Link href='/designer/accessories'>ACCESSORIES</Link>
							</motion.button>

							<motion.button whileHover={{ scale: 1.05 }}>
								<Link href='/designer/pants'>PANTS</Link>
							</motion.button>

							<motion.button whileHover={{ scale: 1.05 }}>
								<Link href='/designer/shoes'>SHOES</Link>
							</motion.button>
						</motion.div>
					</Dropdown>
				</div>

				<div>
					<motion.button
						whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
						className='invisible  text-2xl font-black tracking-widest text-white sm:visible'
					>
						<Link href='/'>BPLR</Link>
					</motion.button>
				</div>

				<div className='flex space-x-4 text-white'>
					<IconContext.Provider value={{ size: '30px' }}>
						<button>
							<AiOutlineSearch />
						</button>
					</IconContext.Provider>

					<IconContext.Provider value={{ size: '30px' }}>
						<button onClick={openModal}>
							<RiAccountCircleLine />
						</button>
					</IconContext.Provider>

					<IconContext.Provider value={{ size: '30px' }}>
						<button>
							<RiHeart2Line />
						</button>
					</IconContext.Provider>

					<IconContext.Provider value={{ size: '30px' }}>
						<button>
							<Link href='/cart'>
								<div className='pr-4'>
									<AiOutlineShoppingCart />
									<div className='absolute bottom-8 right-2 h-6 w-10 rounded-full border border-neutral-900 bg-neutral-100 font-semibold text-neutral-900'>
										<p className='text-neutral-700'>99+</p>
									</div>
								</div>
							</Link>
						</button>
					</IconContext.Provider>
				</div>
			</nav>
		</div>
	)
}

export default Navbar
