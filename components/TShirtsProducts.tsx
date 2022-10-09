import { data } from "utils/data";
import { IconContext } from "react-icons/lib";
import { RiHeart2Fill } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
import ProductItem from "./ProductItem";
import { Provider } from "react-redux";
import { store } from "state/store";

export default function TShirtsProducts() {
    return (
        <div className="justify-start items-center space-y-8 flex flex-col bg-gradient-to-b from-neutral-800 to-neutral-900 p-48">
            <h1 className="text-white font-6xl w-max">
                Clothing {">"} T-Shirts
            </h1>

            <div className="grid grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-16 w-max">
                {data.products.map((product: any) => (
                    <Provider store={store} key={product}>
                        <ProductItem key={product} product={product} />
                    </Provider>
                ))}
            </div>
        </div>
    );
}
