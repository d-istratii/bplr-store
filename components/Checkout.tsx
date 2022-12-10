import { IconContext } from 'react-icons/lib';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { data } from 'utils/data';
import { motion } from 'framer-motion';

function Checkout() {
    function computeDiscount(price: number, discount: number): number {
        const result = Math.floor(price - price * discount);
        return result - 0.01;
    }
    return (
        <div>
            {/* <h1 className='flex flex-col items-center justify-center  pt-36 pb-16 text-5xl font-bold tracking-tight text-white'>
                CHECKOUT
            </h1> */}
            <div className='h-screen'></div>
        </div>
    );
}

export default Checkout;
