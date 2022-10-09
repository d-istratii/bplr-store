import Footer from "components/Footer";
import Navbar from "components/Navbar";
import TShirtsProducts from "components/TShirtsProducts";
import { Provider } from "react-redux";
import { store } from "state/store";

export default function TShirts() {
    return (
        <Provider store={store}>
            <Navbar />
            <TShirtsProducts />
            <Footer />
        </Provider>
    );
}
