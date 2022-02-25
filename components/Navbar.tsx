import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

import Login from './Login'
import Modal from '@mui/material/Modal'
import { IconContext } from 'react-icons'
import { RiAccountCircleLine, RiHeart2Line } from 'react-icons/ri'
import {
	AiOutlineShoppingCart,
	AiOutlineDown,
	AiOutlineSearch,
} from 'react-icons/ai'

function Navbar(props: any) {
	const initialNavbarStyle: string =
		'fixed inset-x-0 top-0 z-10 flex h-24 items-center justify-between bg-gradient-to-b from-neutral-900 p-4'

	const scrolledNavbarStyle: string =
		'fixed inset-x-0 top-0 z-20 flex h-24 items-center justify-between bg-neutral-900 p-4'

	const [navbarStyle, setNavbarStyle] = useState(initialNavbarStyle)
	const [open, setOpen] = useState(false)
	const [loginModal, setLoginModal] = useState(false)
	const [menuModal, setMenuModal] = useState(false)

	const changeNavbarStyleOnScroll = () => {
		if (window.scrollY === 0 && !open) {
			setNavbarStyle(initialNavbarStyle)
		} else setNavbarStyle(scrolledNavbarStyle)
	}

	const toggleLoginModal = () => {
		setLoginModal(loginModal => !loginModal)
	}

	const toggleMenuModal = () => {
		setMenuModal(menuModal => !menuModal)
		console.log('menu Model' + menuModal)
		if (menuModal === true) {
			console.log('DESCHIS')
			setNavbarStyle(
				'fixed inset-x-0 top-0 z-20 flex h-24 items-center justify-between bg-neutral-900 p-4'
			)
		} else {
			console.log('INCHIS')
			setNavbarStyle(
				'fixed inset-x-0 top-0 z-10 flex h-24 items-center justify-between bg-gradient-to-b from-neutral-900 p-4'
			)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', changeNavbarStyleOnScroll)
	})

	return (
		<div>
			{!open ? (
				<motion.nav className={navbarStyle}>
					<div className='flex flex-row'>
						<motion.button
							whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
							className='pl-8 text-2xl font-black tracking-tighter text-white sm:hidden'
						>
							<Link href='/'>1337</Link>
						</motion.button>

						<div className='pl-12 text-lg text-white sm:hidden '>SHOP</div>

						<motion.button
							onClick={() => {
								setOpen(!open)
								setNavbarStyle(scrolledNavbarStyle)
							}}
							whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
							animate={{ rotate: open ? 180 : 0 }}
							className='ml-1 text-white sm:p-4'
						>
							<IconContext.Provider value={{ color: 'white', size: '16px' }}>
								<AiOutlineDown />
							</IconContext.Provider>
						</motion.button>
					</div>

					<motion.button
						whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
						className='invisible p-4 text-2xl font-black tracking-tighter text-white sm:visible'
					>
						<Link href='/'>1337</Link>
					</motion.button>

					{/* Right section icons */}
					<div className='flex space-x-4 text-white sm:hidden'>
						<button className='flex flex-row rounded-xl bg-neutral-800 p-2'>
							<IconContext.Provider value={{ size: '24px' }}>
								<AiOutlineSearch />
							</IconContext.Provider>
						</button>

						<button>
							<Modal
								className='font-Sora'
								open={loginModal}
								onClose={() => setLoginModal(false)}
							>
								<Login loginModal={loginModal} setLoginModal={setLoginModal} />
							</Modal>
							<IconContext.Provider value={{ size: '24px' }}>
								<RiAccountCircleLine onClick={toggleLoginModal} />
							</IconContext.Provider>
						</button>

						<button>
							<IconContext.Provider value={{ size: '24px' }}>
								<RiHeart2Line />
							</IconContext.Provider>
						</button>

						<button>
							<IconContext.Provider value={{ size: '24px' }}>
								<Link href='/cart' passHref>
									<div className='pr-4'>
										<AiOutlineShoppingCart />
										<div className='absolute bottom-12 right-2 h-5 w-8 rounded-full border border-neutral-900 bg-neutral-100 font-semibold text-neutral-900'>
											<p className='text-xs text-neutral-700'>99+</p>
										</div>
									</div>
								</Link>
							</IconContext.Provider>
						</button>
					</div>
				</motion.nav>
			) : (
				<motion.nav className={navbarStyle}>
					<div className='flex flex-row'>
						<motion.button
							whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
							className='pl-8 text-2xl font-black tracking-tighter text-white sm:hidden'
						>
							<Link href='/'>1337</Link>
						</motion.button>

						<div className='pl-12 text-lg text-white sm:hidden '>SHOP</div>

						<motion.button
							onClick={() => {
								setOpen(!open)
								setNavbarStyle(initialNavbarStyle)
							}}
							whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
							animate={{ rotate: open ? 180 : 0 }}
							className='ml-1 text-white sm:p-4'
						>
							<IconContext.Provider value={{ color: 'white', size: '16px' }}>
								<AiOutlineDown />
							</IconContext.Provider>
						</motion.button>

						<motion.ul
							initial={{ y: 48 }}
							animate={{ y: 60 }}
							transition={{ ease: 'easeOut', duration: 0.5 }}
							className='
						absolute left-0 flex w-screen 
						flex-col items-start justify-center 
						space-y-4  border-t border-neutral-800
						bg-gradient-to-b from-neutral-900 to-neutral-800 
						p-4 text-white'
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
						</motion.ul>
					</div>

					<motion.button
						whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
						className='invisible p-4 text-2xl font-black tracking-tighter text-white sm:visible'
					>
						<Link href='/'>1337</Link>
					</motion.button>

					{/* Right section icons */}
					<div className='flex space-x-4 text-white sm:hidden'>
						<button className='flex flex-row rounded-xl bg-neutral-800 p-2'>
							<IconContext.Provider value={{ size: '24px' }}>
								<AiOutlineSearch />
							</IconContext.Provider>
						</button>

						<button>
							<Modal
								className='font-Sora'
								open={loginModal}
								onClose={() => setLoginModal(false)}
							>
								<Login loginModal={loginModal} setLoginModal={setLoginModal} />
							</Modal>
							<IconContext.Provider value={{ size: '24px' }}>
								<RiAccountCircleLine onClick={toggleLoginModal} />
							</IconContext.Provider>
						</button>

						<button>
							<IconContext.Provider value={{ size: '24px' }}>
								<RiHeart2Line />
							</IconContext.Provider>
						</button>

						<button>
							<IconContext.Provider value={{ size: '24px' }}>
								<Link href='/cart' passHref>
									<div className='pr-4'>
										<AiOutlineShoppingCart />
										<div className='absolute bottom-12 right-2 h-5 w-8 rounded-full border border-neutral-900 bg-neutral-100 font-semibold text-neutral-900'>
											<p className='text-xs text-neutral-700'>99+</p>
										</div>
									</div>
								</Link>
							</IconContext.Provider>
						</button>
					</div>
				</motion.nav>
			)}
		</div>
	)
}

export default Navbar
