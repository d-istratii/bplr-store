import React, { useState } from 'react'
import { IconContext } from 'react-icons'
import { AiOutlineDown } from 'react-icons/ai'
import { motion } from 'framer-motion'
import Link from 'next/link'

function Dropdown(props: any) {
	const [open, setOpen] = useState(false)

	return (
		<div>
			<div className='flex pl-2'>
				<motion.button
					whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
					className='text-lg font-black tracking-widest text-white sm:hidden'
				>
					<Link href='/'>BPLR</Link>
				</motion.button>

				<div className='pl-4 text-lg text-white sm:hidden'>SHOP</div>

				<motion.button
					onClick={() => setOpen(!open)}
					whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
					animate={{ rotate: open ? 180 : 0 }}
					className='ml-1 sm:ml-0'
				>
					<IconContext.Provider value={{ color: 'white' }}>
						<AiOutlineDown />
					</IconContext.Provider>
				</motion.button>
			</div>

			{open && props.children}
		</div>
	)
}

export default Dropdown
