import React from 'react'
import { motion } from 'framer-motion'

function Contact() {
	return (
		<div className='flex flex-row justify-center shadow-md'>
			<motion.button
				whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
				whileTap={{ transition: { ease: 'easeIn', duration: 1 } }}
				onClick={() => null}
				className=' text-white bg-black rounded-full
                px-16 py-3 text-sm'
			>
				CONTACT US
			</motion.button>
		</div>
	)
}

export default Contact
