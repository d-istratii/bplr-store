import React, { useState } from 'react'
import { IconContext } from 'react-icons'
import { FaApple } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { MdFacebook } from 'react-icons/md'
import { motion } from 'framer-motion'
import Link from 'next/link'

function LoginExistingUser(props: any) {
	const [emailInput, setEmailInput] = useState('')
	const [emailStyle, setEmailStyle] = useState(
		'border border-gray-400 py-2 px-7 rounded w-full'
	)
	const [passwordInput, setPasswordInput] = useState('')
	const [passwordStyle, setPasswordStyle] = useState(
		'border border-gray-400 py-2 px-7 rounded w-full'
	)

	function validateEmail(email: string) {
		var re = /\S+@\S+\.\S+/
		return re.test(email)
	}

	function validatePassword(password: string) {
		return password.length > 8
	}

	function handleEmail() {
		if (!validateEmail(emailInput)) {
			setEmailStyle('border-2 border-red-400 py-2 px-7 rounded w-full')
		} else setEmailStyle('border border-gray-400 py-2 px-7 rounded w-full')
	}

	function handlePassword() {
		if (!validatePassword(passwordInput)) {
			setPasswordStyle('border-2 border-red-400 py-2 px-7 rounded w-full')
		} else setPasswordStyle('border border-gray-400 py-2 px-7 rounded w-full')
	}

	const handleSubmit = (e: React.FormEvent<EventTarget>) => {
		e.preventDefault()
		handleEmail()
		handlePassword()
	}

	return (
		<div className='w-min space-y-2 rounded-lg bg-white p-8 text-black sm:h-fit sm:w-screen'>
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
					<div>I&#39;M NEW HERE</div>
				</button>
			</div>

			<form autoComplete='off' onSubmit={handleSubmit}>
				<div className='mt-4'>
					<label className='mt-2 text-lg'>E-mail address</label>
					<input
						className={emailStyle}
						type='text'
						placeholder='jane.smith@example.com'
						onChange={e => {
							setEmailInput(e.target.value)
						}}
					/>
				</div>

				<div className='mt-4'>
					<label className='mt-2 text-lg'>Password</label>
					<input
						className={passwordStyle}
						type='password'
						placeholder='********'
						onChange={e => {
							setPasswordInput(e.target.value)
						}}
					/>
				</div>

				<div className='text-md mt-2 flex'>
					<input
						type='checkbox'
						className='mr-1 accent-black'
						defaultChecked={true}
					></input>
					<div>Keep me signed in.</div>
				</div>

				<div className='mb-2 font-bold'>
					<Link href='/forgot'>Forgot your password?</Link>
				</div>

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
				<button className='mt-4' onClick={() => props.setNewUser(true)}>
					New to BPLR? Register.
				</button>
			</div>
		</div>
	)
}

export default LoginExistingUser
