import { IconContext } from 'react-icons'
import { AiOutlineSearch } from 'react-icons/ai'
import { useState } from 'react'

export default function SearchBarList(props: any) {
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
				className='relative z-10 flex h-12 w-12 flex-row items-center justify-start rounded-xl bg-neutral-700 shadow-lg duration-300 ease-in-out focus-within:w-96 focus:transition-all sm:w-max md:hidden'
				onClick={openSearchBar}
			>
				{searchBar ? (
					<input
						type='text'
						placeholder='Quick search...'
						className='order-2 w-screen bg-transparent pr-4 text-white placeholder-neutral-400 outline-none'
						autoFocus
						onBlur={closeSearchBar}
					></input>
				) : null}

				<div className='p-3 text-white'>
					<IconContext.Provider value={{ size: '24px' }}>
						<AiOutlineSearch />
					</IconContext.Provider>
				</div>
			</button>
		</div>
	)
}
