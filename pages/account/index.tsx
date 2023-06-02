import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import { Provider } from 'react-redux';
import { store } from '../../state/index';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Account({ name }: any) {
    const { data: session } = useSession();
    const router = useRouter();

    // Get the query parameter from the URL
    const { keyword } = router.query;

    return (
        <div>
            <Provider store={store}>
                <Navbar />
            </Provider>
            <div className='flex h-screen flex-row justify-center bg-neutral-900 p-48 text-neutral-400'>
                <div className='flex w-1/3 flex-col space-y-4   '>
                    <h1>My Account</h1>
                    {(() => {
                        switch (keyword) {
                            case 'details':
                                return <div>details</div>;
                            case 'orders':
                                return <div>orders</div>;
                            case 'preferences':
                                return <div>preferences</div>;
                            default:
                                return <div>default</div>;
                        }
                    })()}
                    <ul className='space-y-2'>
                        <li className='text-lg font-extrabold text-white'>
                            <Link
                                href={{
                                    pathname: '/account',
                                    query: { keyword: 'details' },
                                }}
                            >
                                Account details
                            </Link>
                        </li>

                        <li>
                            <Link
                                href={{
                                    pathname: '/account',
                                    query: { keyword: 'orders' },
                                }}
                            >
                                Orders & Returns
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={{
                                    pathname: '/account',
                                    query: { keyword: 'preferences' },
                                }}
                            >
                                Communication preference
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className='w-2/3 flex-col'>
                    {(() => {
                        switch (keyword) {
                            case 'details':
                                return <div>details</div>;
                            case 'orders':
                                return <div>orders</div>;
                            case 'preferences':
                                return <div>preferences</div>;
                            default:
                                return <div>default</div>;
                        }
                    })()}
                    <div>test</div>
                    <div>test</div>
                    <div>test</div>
                    <div>test</div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
