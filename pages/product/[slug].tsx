import Footer from "components/Footer";
import Navbar from "components/Navbar";

import { useRouter } from "next/router";
import { data } from "utils/data";

import Link from "next/link";
import { Provider } from "react-redux";
import { store } from "state/store";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import ProductPage from "components/ProductPage";

export default function ProductSlug() {
    const router = useRouter();
    const { slug } = router.query;
    const product = data.products.find((a) => a.slug === slug);

    if (!product) {
        return <div>ERROR NO PRODUCT FOUND</div>;
    }
    return (
        <div>
            <Provider store={store}>
                <ProductPage product={product}></ProductPage>
                <Navbar />
                <Footer />
            </Provider>
        </div>
    );
}
