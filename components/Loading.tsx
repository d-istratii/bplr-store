import { motion } from 'framer-motion';
import { CircleLoader } from 'react-spinners';

function Loading() {
    return (
        <motion.div
            className='flex h-screen flex-row items-center justify-center bg-neutral-800 font-Sora'
            transition={{ ease: 'anticipate', duration: 0.6 }}
            animate={{ y: 0 }}
            initial={{ y: -24 }}
        >
            <CircleLoader color='white' size={100} />
        </motion.div>
    );
}

export default Loading;
