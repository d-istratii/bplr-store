import React from "react";
import { IconContext } from "react-icons/lib";
import { RiHeart2Fill } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "state";
import { Provider } from "react-redux";
import { store } from "state/store";

export default function ProductItem({ product }: any) {
    function computeDiscount(price: number, discount: number) {
        const result = Math.floor(price - price * discount);
        return result - 0.01;
    }

    const dispatch = useDispatch();

    const { itemAddition, itemDeduction, cartInitialization } =
        bindActionCreators(actionCreators, dispatch);

    const amount = useSelector((state: State) => state.cart);

    return (
        <div>
            <Provider store={store}>
                <Link href={`/product/${product.slug}`} key={product} passHref>
                    <button className="rounded-3xl bg-white text-white shadow-2xl duration-200 hover:scale-105">
                        <div className="flex flex-col items-center justify-center pb-4">
                            <img className="w-72 p-4" src={product.image} />
                            <h2 className="font-bold text-neutral-900">
                                {product.slug}
                            </h2>
                            <h3 className="font-bold text-neutral-900">
                                {product.discount > 0 ? (
                                    <div className="flex flex-col items-center space-x-1 py-4">
                                        <div className="flex flex-row space-x-2">
                                            <p className="text-sm text-red-400 line-through">
                                                {product.price - 0.01} €
                                            </p>
                                            <p className="text-sm text-red-400">
                                                -{product.discount * 100}%
                                            </p>
                                        </div>
                                        <p>
                                            {computeDiscount(
                                                product.price,
                                                product.discount
                                            )}
                                            €
                                        </p>
                                        <span className="ml-1 inline text-xs text-neutral-400">
                                            (VAT included)
                                        </span>
                                    </div>
                                ) : (
                                    <div className="flex flex-row items-center space-x-1">
                                        <p>{product.price - 0.01} €</p>
                                        <span className="ml-1 inline text-xs text-neutral-400">
                                            (VAT included)
                                        </span>
                                    </div>
                                )}
                            </h3>
                            <div className="flex flex-row gap-4">
                                <button className="rounded-xl bg-neutral-900 p-2 hover:bg-neutral-500">
                                    <IconContext.Provider
                                        value={{
                                            color: "white",
                                            size: "20px",
                                        }}
                                    >
                                        <RiHeart2Fill />
                                    </IconContext.Provider>
                                </button>

                                <div className="rounded-xl bg-neutral-900 p-2 hover:bg-neutral-500">
                                    <IconContext.Provider
                                        value={{ size: "20px" }}
                                    >
                                        <AiOutlineShoppingCart />
                                    </IconContext.Provider>
                                </div>
                            </div>
                        </div>
                    </button>
                </Link>
            </Provider>
        </div>
    );
}
