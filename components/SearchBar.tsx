import { IconContext } from 'react-icons'
import { AiOutlineSearch } from 'react-icons/ai'
import { useEffect, useState } from 'react'

export default function SearchBar() {
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
				className='relative z-10 flex h-12 w-12 flex-row items-center justify-start rounded-2xl bg-neutral-800 shadow-lg duration-500 ease-in-out  focus-within:w-96 focus:transition-all sm:w-max'
				onClick={openSearchBar}
			>
				{searchBar ? (
					<input
						type='text'
						placeholder='Quick search...'
						className='order-2 bg-transparent text-white placeholder-neutral-400 outline-none'
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
					className='absolute inset-0 z-0 h-screen bg-neutral-900 opacity-50'
					onClick={closeSearchBar}
				></div>
			) : null}
		</div>
	)
}
