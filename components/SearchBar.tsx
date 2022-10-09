import { IconContext } from 'react-icons'
import { AiOutlineSearch } from 'react-icons/ai'
import { useState } from 'react'

export default function SearchBar(props: any) {
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
                className="relative z-10 flex h-12 w-12 flex-row items-center justify-start rounded-xl bg-white shadow-lg duration-300 ease-in-out focus-within:w-96  focus:transition-all sm:hidden sm:w-max"
                onClick={openSearchBar}
            >
                {searchBar ? (
                    <input
                        type="text"
                        placeholder="Quick search..."
                        className="order-2 w-screen bg-transparent pr-4 text-neutral-800 placeholder-neutral-400 outline-none"
                        autoFocus
                    ></input>
                ) : null}

                <div className="p-3 text-neutral-800">
                    <IconContext.Provider value={{ size: '24px' }}>
                        <AiOutlineSearch />
                    </IconContext.Provider>
                </div>
            </button>

            {searchBar ? (
                <div
                    className="absolute inset-0 z-0 h-screen bg-black opacity-50"
                    onClick={closeSearchBar}
                ></div>
            ) : null}
        </div>
    )
}
