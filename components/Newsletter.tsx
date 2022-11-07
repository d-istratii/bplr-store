export default function Newsletter() {
    return (
        <div>
            <div className='flex items-center justify-center bg-neutral-900 bg-gradient-to-b from-neutral-900 to-neutral-800 p-16'>
                <div className='flex w-fit flex-col items-center space-y-8 rounded-2xl bg-neutral-700 px-48 py-16 shadow-2xl sm:w-96 sm:px-8 sm:py-8'>
                    <div className='text-2xl font-bold text-white'>
                        NEWSLETTER
                    </div>

                    <div className='text-neutral-300'>
                        Subscribe to receive updates, access to exclusive deals,
                        and more.
                    </div>

                    <div className='flex flex-row rounded-xl bg-neutral-600 p-3 shadow-xl autofill:bg-yellow-200 sm:w-72 sm:items-center sm:justify-center sm:p-4'>
                        <input
                            type='email'
                            placeholder='Your email'
                            className='rounded bg-neutral-600 px-4 text-white placeholder-white outline-none sm:w-36'
                        />

                        <button
                            type='button'
                            className='rounded-xl border border-neutral-300 bg-neutral-700 py-2 px-4 text-sm font-bold text-neutral-300 shadow-lg hover:bg-neutral-300 hover:text-neutral-700 focus:z-10 focus:bg-neutral-900 focus:hover:text-white sm:px-4'
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <div className='line absolute left-0 w-full overflow-hidden fill-neutral-800'>
                <svg
                    data-name='Layer 1'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 1200 120'
                    preserveAspectRatio='none'
                >
                    <path d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'></path>
                </svg>
            </div>
        </div>
    );
}
