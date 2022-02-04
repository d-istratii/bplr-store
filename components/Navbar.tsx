import React, {useState} from "react";
import { motion } from 'framer-motion';
import Link from 'next/link'
import Dropdown from "./Dropdown";
import Login from "./Login";
import Modal from "@mui/material/Modal";

function Navbar(props : any){
    const [loginModal, setLoginModal] = useState(false);

    const openModal = () => {
        setLoginModal(prev => !prev)
    };

    return (
        <div>
            <Modal className="font-Sora" open={loginModal} onClose={() => setLoginModal(false)}>
                <Login loginModal={loginModal} setLoginModal={setLoginModal}/>
            </Modal>
            <nav className="flex items-center justify-between bg-black h-16 p-4 fixed top-0 inset-x-0">
                    <div className="flex space-x-4">
                        <Dropdown>
                            <motion.div
                            animate={{ y: 12}}
                            transition={{ ease : "easeOut", duration: 0.4}}
                            className="absolute flex flex-col mt-5 text-white items-start space-y-3">

                                <motion.button
                                    whileHover={{ scale: 1.05 }}>
                                    <Link href="/designer/tshirts">T-SHIRTS - SHORT SLEEVES</Link>
                                </motion.button>


                                <motion.button
                                    whileHover={{ scale: 1.05 }}>
                                    <Link href="/designer/shirts">SHIRTS - LONG SLEEVES</Link>
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}>
                                    <Link href="/designer/accessories">ACCESSORIES</Link>
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}>
                                    <Link href="/designer/pants">PANTS</Link>
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}>
                                    <Link href="/designer/shoes">SHOES</Link>
                                </motion.button>
                            </motion.div>
                        </Dropdown>
                    </div>

                    <div className="flex space-x-4 text-white">
                        <button onClick={openModal}>LOGIN</button>
                        <Link href="/cart">CART</Link>
                    </div>
            </nav>
        </div>
    )
}

export default Navbar;