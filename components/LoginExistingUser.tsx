import React, { useState } from 'react'
import { IconContext } from 'react-icons'
import { FcGoogle } from 'react-icons/fc'
import { motion } from 'framer-motion'
import Link from 'next/link'

function LoginExistingUser(props: any) {
	const [emailInput, setEmailInput] = useState('')
	const [emailStyle, setEmailStyle] = useState(
		'border border-gray-400 py-2 px-7 rounded w-full text-black'
	)
	const [emailError, setEmailError] = useState('')

	const [passwordInput, setPasswordInput] = useState('')
	const [passwordStyle, setPasswordStyle] = useState(
		'border border-gray-400 py-2 px-7 rounded w-full text-black'
	)
	const [passwordError, setPasswordError] = useState('')

	function isLengthy(password: string) {
		if (password.length >= 8) {
			setPasswordError('')
			return true
		} else {
			setPasswordError('Password is too short.')
			return false
		}
	}

	function isUpperCase(password: string) {
		var regex = /[A-Z]/
		if (regex.test(password)) {
			setPasswordError('')
			return true
		} else {
			setPasswordError("Password doesn't contain a upper case letter.")
			return false
		}
	}

	function isLowerCase(password: string) {
		var regex = /[a-z]/
		if (regex.test(password)) {
			setPasswordError('')
			return true
		} else {
			setPasswordError("Password doesn't contain a lower case letter.")
			return false
		}
	}

	function isSpecialCase(password: string) {
		var regex = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
		if (regex.test(password)) {
			setPasswordError('')
			return true
		} else {
			setPasswordError("Password doesn't contain a special character.")
			return false
		}
	}

	function validateEmail(email: string) {
		var regex = /\S+@\S+\.\S+/
		if (regex.test(email)) {
			setEmailError('')
			return true
		} else {
			setEmailError('Invalid email')
			return false
		}
	}

	function handleEmail() {
		if (!validateEmail(emailInput)) {
			setEmailStyle('border-2 border-red-400 py-2 px-7 rounded w-full text-black')
		} else
			setEmailStyle('border border-gray-400 py-2 px-7 rounded w-full text-black')
	}

	function checkEmailInput(e: React.SetStateAction<string>) {
		setEmailInput(e)
		handleEmail()
	}

	function validatePassword(password: string) {
		return (
			isLengthy(password) &&
			isUpperCase(password) &&
			isLowerCase(password) &&
			isSpecialCase(password)
		)
	}

	function handlePassword() {
		if (!validatePassword(passwordInput)) {
			setPasswordStyle(
				'border-2 border-red-400 py-2 px-7 rounded w-full text-black'
			)
		} else
			setPasswordStyle(
				'border border-gray-400 py-2 px-7 rounded w-full text-black'
			)
	}

	function requestStatus() {
		if (validatePassword(passwordInput) && validateEmail(emailInput)) {
			console.log('SUCCESFUL AUTHENTICAITON')
		} else console.log('FAIL')
	}

	const handleSubmit = (e: React.FormEvent<EventTarget>) => {
		e.preventDefault()
		handleEmail()
		handlePassword()
		requestStatus()
	}

	return (
		<motion.div animate={{ y: 0 }} initial={{ y: -100 }}>
			<div className='w-min space-y-2 rounded-lg bg-neutral-800 p-8 text-white sm:h-fit sm:w-screen'>
				<div className='mb-8 flex flex-row justify-between'>
					<h1 className='text-2xl '>Come on in</h1>

					<motion.button
						className='rounded-md px-2 text-2xl hover:bg-neutral-700'
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
							onChange={e => checkEmailInput(e.target.value)}
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
