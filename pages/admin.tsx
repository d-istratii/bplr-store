import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import { Provider } from 'react-redux';
import { store } from '../state/index';
import Admin from 'components/Admin';

export default function Cart() {
    return (
        <div>
            <Provider store={store}>
                <Navbar />
            </Provider>
            <Admin />
            <Footer />
        </div>
    );
}
