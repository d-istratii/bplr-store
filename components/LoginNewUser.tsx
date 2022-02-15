import React, { useState } from 'react'
import { IconContext } from 'react-icons'
import { FaApple } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { MdFacebook } from 'react-icons/md'
import { motion } from 'framer-motion'
import Link from 'next/link'

function LoginExistingUser(props: any) {
	const [emailInput, setEmailInput] = useState(' ')
	const [emailStyle, setEmailStyle] = useState(
		'border border-gray-400 py-2 px-7 rounded w-full'
	)

	function handleEmail() {
		switch (emailInput) {
			case 'da':
				setEmailStyle(
					'border-2 border-red-400 focus:border-red-400 py-2 px-7 rounded w-full'
				)
				console.log(emailInput)
				break
			default:
				console.log(emailInput)
				break
		}
	}

	const handleSubmit = (e: React.FormEvent<EventTarget>) => {
		e.preventDefault()
		console.log('Email input: ' + emailInput)
		handleEmail()
	}

	return (
		<motion.div
			className='w-min space-y-2 rounded-lg bg-white p-8 text-black sm:w-screen'
			animate={{ y: 0 }}
			transition={{
				type: 'spring',
				stiffness: 100,
			}}
		>
			<div className='mb-4 flex flex-row justify-between'>
				<h1 className='text-2xl '>Come on in</h1>

				<motion.button
					className='text-2xl'
					onClick={() => props.setLoginModal(false)}
					whileHover={{ scale: 1.33 }}
				>
					×
				</motion.button>
			</div>

			<div className='flex space-x-4 border-b border-gray-400'>
				<button
					className='border-b-2 border-black font-bold'
					onClick={() => props.setNewUser(false)}
				>
					SIGN IN
				</button>

				<button
					className='text-gray-500 hover:text-black hover:filter  focus:font-black focus:text-black'
					onClick={() => props.setNewUser(true)}
				>
					<div>I'M NEW HERE</div>
				</button>
			</div>

			<form autoComplete='off' onSubmit={handleSubmit}>
				<div className='flex flex-col'>
					<label className='mt-2 text-lg'>E-mail address</label>
					<input
						// className="border border-gray-400 py-2 px-7 rounded w-full"
						className={emailStyle}
						placeholder='jane.smith@example.com'
						type='text'
						onChange={e => {
							setEmailInput(e.target.value)
						}}
					/>
				</div>

				<label className='mt-2 text-lg'>Password</label>
				<input
					type='password'
					className='w-full rounded border border-gray-400 py-2 px-7'
					placeholder='********'
				></input>

				<div className='flex'>
					<input type='checkbox' className='mt-1 mr-1 accent-black'></input>
					<div>Keep me signed in.</div>
				</div>

				<Link href='/forgot'>
					<button className='text-sm'>Forgot your password?</button>
				</Link>

				<div className='flex flex-row justify-center'>
					<button className='w-96 rounded-xl bg-gray-800 py-2 font-semibold text-white'>
						Sign in
					</button>
				</div>
			</form>

			<div className='flex flex-row justify-center'>OR</div>

			<div className='flex flex-row justify-center'>
				<button className='grid w-96 grid-cols-5 rounded border border-black py-2'>
					<IconContext.Provider value={{ size: '24px' }}>
						<FcGoogle className='ml-4' />
					</IconContext.Provider>
					<div className='col-span-3 font-bold'>Continue with Google</div>
				</button>
			</div>

			<div className='flex flex-row justify-center'>
				<button className='grid w-96 grid-cols-5 rounded border border-black py-2'>
					<IconContext.Provider value={{ size: '24px' }}>
						<FaApple className='ml-4' />
					</IconContext.Provider>
					<div className='col-span-3 font-bold'>Continue with Apple</div>
				</button>
			</div>

			<div className='flex flex-row justify-center '>
				<button className='grid w-96 grid-cols-5 rounded border border-black py-2'>
					<IconContext.Provider value={{ color: '#3b5998', size: '24px' }}>
						<MdFacebook className='ml-4' />
					</IconContext.Provider>
					<div className='col-span-3 font-bold'>Continue with Facebook</div>
				</button>
			</div>

			<div className='flex flex-row justify-center'>
				<button className='mt-4' onClick={() => props.setNewUser(true)}>
					New to BPLR? Register.
				</button>
			</div>
		</motion.div>
	)
}

export default LoginExistingUser
