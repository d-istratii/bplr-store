import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import { Provider } from 'react-redux';
import { store } from '../state/index';
import Checkout from 'components/Checkout';

export default function Cart() {
    return (
        <div>
            <Provider store={store}>
                <Navbar />
            </Provider>
            <Checkout />
            <Footer />
        </div>
    );
}
