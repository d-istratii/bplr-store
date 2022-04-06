import React, { useState } from 'react'
import { IconContext } from 'react-icons'
import { FcGoogle } from 'react-icons/fc'
import { motion } from 'framer-motion'
import Link from 'next/link'

function LoginExistingUser(props: any) {
	const initialInputStyle =
		'border-0 border-gray-400 py-2 px-7 rounded w-full text-white outline-0 bg-neutral-700 focus:outline-0 focus:outline'
	const invalidInputStyle =
		'border border-red-400 py-2 px-7 rounded w-full text-white outline-0 bg-red-700/10 focus:outline-0 focus:outline'
	const validInputStyle =
		'border-2 border-google-green py-2 px-7 rounded w-full text-white outline-0 bg-google-green/10 focus:outline-0 focus:outline'

	const [emailInput, setEmailInput] = useState('')
	const [emailError, setEmailError] = useState('')
	const [emailStyle, setEmailStyle] = useState(initialInputStyle)

	const [passwordInput, setPasswordInput] = useState('')
	const [passwordError, setPasswordError] = useState('')
	const [passwordStyle, setPasswordStyle] = useState(initialInputStyle)

	const [formState, setFormState] = useState(0)
	const [formVisibility, setFormVisibility] = useState('')

	function isLengthy(password: string) {
		if (password.length >= 8) {
			setPasswordError('')
			return true
		} else {
			setPasswordError('Too short.')
			return false
		}
	}

	function isUpperCase(password: string) {
		var regex = /[A-Z]/
		if (regex.test(password)) {
			setPasswordError('')
			return true
		} else {
			setPasswordError('Missing upper-case character.')
			return false
		}
	}

	function isLowerCase(password: string) {
		var regex = /[a-z]/
		if (regex.test(password)) {
			setPasswordError('')
			return true
		} else {
			setPasswordError('Missing lower-case character.')
			return false
		}
	}

	function isSpecialCase(password: string) {
		var regex = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
		if (regex.test(password)) {
			setPasswordError('')
			return true
		} else {
			setPasswordError('Missing special character.')
			return false
		}
	}

	function isEmpty(password: string) {
		return password.length == 0
	}

	function validatePassword() {
		if (
			isLengthy(passwordInput) &&
			isUpperCase(passwordInput) &&
			isLowerCase(passwordInput) &&
			isSpecialCase(passwordInput)
		) {
			setPasswordError('')
			setPasswordStyle(validInputStyle)
			return true
		} else {
			setPasswordStyle(invalidInputStyle)
			return false
		}
	}

	function validatePasswordBlur() {
		if (isEmpty(passwordInput)) {
			setPasswordError('')
			setPasswordStyle(initialInputStyle)
		} else if (
			isLengthy(passwordInput) &&
			isUpperCase(passwordInput) &&
			isLowerCase(passwordInput) &&
			isSpecialCase(passwordInput)
		) {
			setPasswordError('')
			setPasswordStyle(validInputStyle)
		} else setPasswordStyle(invalidInputStyle)
	}

	function validateEmail() {
		var regex = /\S+@\S+\.\S+/
		if (regex.test(emailInput)) {
			setEmailError('')
			setEmailStyle(validInputStyle)
			return true
		} else {
			setEmailError('Invalid email')
			setEmailStyle(invalidInputStyle)
			return false
		}
	}

	function validateEmailBlur() {
		if (emailInput.length === 0) {
			setEmailError('')
			setEmailStyle(initialInputStyle)
			return true
		}
		var regex = /\S+@\S+\.\S+/
		if (regex.test(emailInput)) {
			setEmailError('')
			setEmailStyle(validInputStyle)
			return true
		} else {
			setEmailError('Invalid email')
			setEmailStyle(invalidInputStyle)
			return false
		}
	}

	function requestStatus() {
		if (validateEmail() && validatePassword()) {
			setFormState(-1000),
				setTimeout(() => setFormVisibility('hidden'), 500),
				setTimeout(() => props.setLoginModal(false), 500)
		}
	}

	const handleSubmit = (e: React.FormEvent<EventTarget>) => {
		e.preventDefault()
		validateEmail()
		validatePassword()
		requestStatus()
	}
	return (
		<motion.div
			animate={{ y: formState }}
			initial={{ y: -100 }}
			className={formVisibility}
		>
			<div className='w-min space-y-2 rounded-lg bg-neutral-800 p-8 text-white sm:h-fit sm:w-screen'>
				<div className='mb-8 flex flex-row justify-between'>
					<h1 className='text-2xl '>Come on in</h1>

					<motion.button
						className='rounded-md px-2 text-2xl hover:bg-neutral-700 active:bg-neutral-600'
						onClick={() => props.setLoginModal(false)}
						whileHover={{ scale: 1.33 }}
					>
						×
					</motion.button>
				</div>

				<div className='flex space-x-4 border-b border-gray-400'>
					<button
						className='border-b-2 border-white font-bold'
						onClick={() => props.setNewUser(false)}
					>
						SIGN IN
					</button>

					<button
						className='text-neutral-400 hover:text-neutral-200 hover:filter  focus:font-black active:text-white'
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
							onChange={e => setEmailInput(e.target.value)}
							onBlur={validateEmailBlur}
						/>
						<p className='mt-1 text-red-500'>{emailError}</p>
					</div>

					<div className='mt-4'>
						<label className='mt-2 rounded-xl text-lg'>Password</label>
						<input
							className={passwordStyle}
							type='password'
							placeholder='********'
							onChange={e => setPasswordInput(e.target.value)}
							onBlur={validatePasswordBlur}
						/>
						<p className='mt-1 text-red-500'>{passwordError}</p>
					</div>

					<div className='text-md mt-2 flex'>
						<input
							type='checkbox'
							className='mr-1 accent-black'
							defaultChecked={true}
						></input>
						<div>Keep me signed in.</div>
					</div>

					<div className='mb-2'>
						<Link href='/forgot'>Forgot your password?</Link>
					</div>

					<div className='flex flex-row justify-center pt-2'>
						<button className='w-96 rounded-xl bg-neutral-700 py-2 font-semibold text-white shadow-xl hover:bg-neutral-600'>
							Sign in
						</button>
					</div>
				</form>

				<div className='flex flex-row justify-center'>OR</div>

				<div className='flex flex-row justify-center'>
					<button className='grid w-96 grid-cols-5 rounded-xl border border-white py-2 shadow-xl'>
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
		</motion.div>
	)
}

export default LoginExistingUser
