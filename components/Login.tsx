import { useState } from 'react'
import LoginExistingUser from './LoginExistingUser'
import LoginNewUser from './LoginNewUser'

function Login(props: any) {
	const [newUser, setNewUser] = useState(false)

	return (
		<div>
			{props.loginModal ? (
				<div className='absolute left-1/2 -translate-x-1/2'>
					{!newUser ? (
						<LoginExistingUser
							setLoginModal={props.setLoginModal}
							setNewUser={setNewUser}
						/>
					) : (
						<LoginNewUser
							setLoginModal={props.setLoginModal}
							setNewUser={setNewUser}
						/>
					)}
				</div>
			) : null}
		</div>
	)
}

export default Login
