import { IconContext } from 'react-icons'
import { FaApple } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { MdFacebook } from 'react-icons/md'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function LoginNewUser(props: any) {
	return (
		<div className='h-2/3 w-min space-y-2 rounded-lg bg-white p-8 text-black sm:w-screen'>
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

			<div className='flex space-x-4 border-b border-gray-400 text-gray-500'>
				<button
					className='hover:text-black focus:font-black focus:text-black'
					onClick={() => props.setNewUser(false)}
				>
					SIGN IN
				</button>

				<button
					className='border-b-2 border-black font-black text-black'
					onClick={() => props.setNewUser(true)}
				>
					<div>I&#39;M NEW HERE</div>
				</button>
			</div>

			<form autoComplete='off'>
				<label className='mt-6' htmlFor='name'>
					Name
				</label>
				<input
					type='text'
					className='w-full rounded border border-gray-400 py-2 px-7'
					placeholder='Jane Smith'
				></input>
				<p className='text-rose-500'></p>

				<label htmlFor='email'>E-mail address</label>
				<input
					className='w-full rounded border border-gray-400 py-2 px-7'
					placeholder='jane.smith@example.com'
				></input>
				<p className='text-rose-500'></p>

				<label htmlFor='password'>Password</label>
				<input
					type='password'
					className='w-full rounded border border-gray-400 py-2 px-7'
					placeholder='********'
				></input>
				<p className='text-rose-500'></p>

				<div className='text-sm'>
					By registering, you agree with our
					<Link href='/terms-and-conditions'> </Link>
					<Link href='/terms-and-conditions' passHref>
						<button className='underline hover:text-gray-600'>
							Terms & Conditions
						</button>
					</Link>
					<Link href='/terms-and-conditions'> </Link>
					and
					<Link href='/privacy-policy'> </Link>
					<Link href='/privacy-policy' passHref>
						<button className='underline hover:text-gray-600'>
							Privacy and Cookie Policy
						</button>
					</Link>
				</div>

				<div className='flex flex-row justify-center'>
					<button className='mt-4 w-96 rounded-xl bg-gray-800 py-2 font-semibold text-white'>
						Register
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
		</div>
	)
}
