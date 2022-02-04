import React, { useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import { IconContext } from "react-icons";
import { motion } from 'framer-motion';
import Link from 'next/link';

function Dropdown(props : any) {
    const [open, setOpen] = useState(false);

    return (
    <div>
        <div className="flex">

            <motion.button
                        whileHover={{ scale: 1.1, transition: { duration : 0.3} }}
                        whileTap={{ transition : { ease : "easeOut", duration : 1}}}
                        className="tracking-widest font-black text-white">
                        <Link href="/">BPLR</Link>
            </motion.button>

            <div className="text-white ml-4">SHOP</div>

            <motion.button onClick={() => setOpen(!open)}
                           animate={{ rotate : open ? 180 : 0}}
                           className="ml-1">
                <IconContext.Provider value={{ color: "white"}}>
                    <AiOutlineDown/>
                </IconContext.Provider>
            </motion.button>
        </div>

        {open && props.children}
    </div>
    )
}

export default Dropdown;