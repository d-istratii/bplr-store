import { useState, useEffect } from 'react'

export default function whatever() {
	const [menuModal, setMenuModal] = useState(false)

	const toggleModal = () => {
		setMenuModal(menuModal => !menuModal)
		console.log(menuModal)
	}
	// useEffect(() => {
	// 	document?.getElementById('openButton')!.addEventListener('click', toggleModal)
	// }, [])

	return (
		<>
			<button
				className='rounded bg-blue-800 py-2 px-4 font-bold text-white hover:bg-blue-700'
				id='openButton'
				onClick={toggleModal}
			>
				Arrow Button
			</button>
		</>
	)
}
