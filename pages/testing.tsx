// import Test from 'components/TestComponent';
// import { Provider } from 'react-redux';
// import { store } from '../state/index';

// export default function testing() {
//     return (
//         <>
//             <Provider store={store}>
//                 <Test />
//             </Provider>
//         </>
//     );
// }
import { motion } from 'framer-motion';

const ContactPage = () => {
    return (
        <div className='bg-gray-800 py-16'>
            <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
                <div className='text-center'>
                    <h2 className='mb-4 text-3xl font-bold text-gray-100'>
                        Get in touch
                    </h2>
                    <p className='mb-8 text-gray-400'>
                        Fill out the form below to send us a message and we'll
                        get back to you as soon as possible.
                    </p>
                </div>
                <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
                    <div>
                        <h3 className='mb-4 text-xl font-semibold text-gray-100'>
                            Contact Information
                        </h3>
                        <p className='mb-4 text-gray-400'>
                            <i className='fas fa-phone-alt mr-2'></i>
                            123-456-7890
                        </p>
                        <p className='mb-4 text-gray-400'>
                            <i className='fas fa-envelope mr-2'></i>
                            info@example.com
                        </p>
                        <p className='text-gray-400'>
                            <i className='fas fa-map-marker-alt mr-2'></i>123
                            Main St, Anytown USA
                        </p>
                    </div>
                    <form className='rounded-lg bg-gray-900 p-8'>
                        <div className='mb-4'>
                            <label
                                className='mb-2 block text-gray-400'
                                htmlFor='name'
                            >
                                Name
                            </label>
                            <input
                                className='w-full rounded-lg border bg-gray-800 px-3 py-2 text-gray-100 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600'
                                id='name'
                                name='name'
                                type='text'
                                placeholder='Enter your name'
                            />
                        </div>
                        <div className='mb-4'>
                            <label
                                className='mb-2 block text-gray-400'
                                htmlFor='email'
                            >
                                Email
                            </label>
                            <input
                                className='w-full rounded-lg border bg-gray-800 px-3 py-2 text-gray-100 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600'
                                id='email'
                                name='email'
                                type='email'
                                placeholder='Enter your email address'
                            />
                        </div>
                        <div className='mb-4'>
                            <label
                                className='mb-2 block text-gray-400'
                                htmlFor='message'
                            >
                                Message
                            </label>
                            <textarea
                                className='w-full rounded-lg border bg-gray-800 px-3 py-2 text-gray-100 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600'
                                id='message'
                                name='message'
                                rows={6}
                                placeholder='Enter your message'
                            ></textarea>
                        </div>
                        <div className='text-center'>
                            <motion.button
                                className='rounded-lg bg-blue-600 py-2 px-4 font-semibold text-gray-100 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50'
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                type='submit'
                            >
                                Send
                            </motion.button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
