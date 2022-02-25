// import { motion } from 'framer-motion'
// import Link from 'next/link'
// import { useState } from 'react'

// export default function DropDownTest() {
// 	const [open, setOpen] = useState(false)

// 	return (
// 		<div>
// 			<button
// 				className='rounded-xl bg-neutral-900 py-2 px-6 text-white'
// 				onClick={() => setOpen(!open)}
// 			>
// 				OPEN BUTTON
// 			</button>

// 			{open ? (
// 				<motion.div
// 					animate={{ y: 12 }}
// 					transition={{ ease: 'easeOut', duration: 0.4 }}
// 					className='absolute flex w-screen flex-col items-start space-y-3 divide-y divide-solid divide-neutral-400 bg-neutral-900 p-4 text-white'
// 				>
// 					<div className='w-screen'>
// 						<motion.button whileHover={{ scale: 1.05 }}>
// 							<Link href='/designer/tshirts'>T-SHIRTS - SHORT SLEEVES</Link>
// 						</motion.button>
// 					</div>

// 					<div className='w-screen'>
// 						<motion.button whileHover={{ scale: 1.05 }}>
// 							<Link href='/designer/tshirts'>SHIRTS - LONG SLEEVES</Link>
// 						</motion.button>
// 					</div>

// 					<div className='w-screen'>
// 						<motion.button whileHover={{ scale: 1.05 }}>
// 							<Link href='/designer/tshirts'>ACCESSORIES</Link>
// 						</motion.button>
// 					</div>
// 					<div className='w-screen'>
// 						<motion.button whileHover={{ scale: 1.05 }}>
// 							<Link href='/designer/tshirts'>PANTS</Link>
// 						</motion.button>
// 					</div>
// 					<div className='w-screen'>
// 						<motion.button whileHover={{ scale: 1.05 }}>
// 							<Link href='/designer/tshirts'>SHOES</Link>
// 						</motion.button>
// 					</div>
// 				</motion.div>
// 			) : null}
// 		</div>
// 	)
// }

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function whatever() {
	const [menuModal, setMenuModal] = useState(false)

	useEffect(() => {
		document?.getElementById('openButton')!.addEventListener('click', () => {
			setMenuModal(menuModal => !menuModal)
		})
	}, [])

	return (
		<>
			<button
				className='bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700'
				id='openButton'
			>
				Arrow Button
			</button>

			{menuModal ? (
				<motion.ul
					initial={{ y: -10 }}
					animate={{ y: 0 }}
					transition={{ ease: 'easeOut', duration: 0.5 }}
					className='flex flex-col items-start justify-center space-y-4 bg-neutral-900  p-4 text-white'
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
			) : null}
		</>
	)
}
