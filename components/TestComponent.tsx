import { IconContext } from 'react-icons'
import { AiOutlineSearch } from 'react-icons/ai'
import { useState } from 'react'

export default function TestComponent() {
	const [searchBar, setSearchBar] = useState(false)
	const openSearchBar = () => {
		setSearchBar(true)
	}
	const closeSearchBar = () => {
		setSearchBar(false)
	}

	return (
		<div>
			<button
				className='relative z-10 flex h-12 w-12 flex-row items-center justify-between rounded-2xl bg-neutral-800 shadow-xl duration-300 ease-in-out  focus-within:w-1/4 sm:w-max'
				onClick={openSearchBar}
			>
				{searchBar ? (
					<input
						type='text'
						placeholder='Quick search...'
						className='ml-4 bg-transparent text-white placeholder-neutral-400 outline-none'
					></input>
				) : null}

				<div className='p-3 text-white'>
					<IconContext.Provider value={{ size: '24px' }}>
						<AiOutlineSearch />
					</IconContext.Provider>
				</div>
			</button>

			{searchBar ? (
				<div
					className='absolute inset-0 z-0 bg-neutral-700 opacity-75'
					onClick={closeSearchBar}
				></div>
			) : null}
		</div>
	)
}
