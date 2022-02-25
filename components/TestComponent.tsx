import { useState } from 'react'
import { IconContext } from 'react-icons'
import { AiOutlineSearch } from 'react-icons/ai'
import { motion } from 'framer-motion'

export default function TestComponent() {
	const [searchBar, setSearchBar] = useState(false)

	function toggleSearchBar() {
		setSearchBar(searchBar => !searchBar)
	}

	return (
		<div>
			{!searchBar ? (
				<button
					className='visible flex flex-row rounded-xl bg-neutral-700 p-2 text-white'
					onClick={toggleSearchBar}
				>
					<IconContext.Provider value={{ size: '24px' }}>
						<AiOutlineSearch />
					</IconContext.Provider>
				</button>
			) : (
				<div className='flex w-96 justify-between rounded-xl bg-neutral-700 p-2 shadow-xl sm:w-max'>
					<input
						type='text'
						placeholder='Quick search...'
						className='bg-neutral-700 px-2 text-white placeholder-neutral-400  outline-none'
					/>
					<button
						className='flex flex-row rounded-xl  text-white'
						onClick={toggleSearchBar}
					>
						<IconContext.Provider value={{ size: '24px' }}>
							<AiOutlineSearch />
						</IconContext.Provider>
					</button>
				</div>
			)}
		</div>
	)
}
