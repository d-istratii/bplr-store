import React, { useState } from "react";
import { IconContext } from "react-icons";
import { FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { MdFacebook } from 'react-icons/md';
import { motion } from 'framer-motion';
import Link from "next/link";


function LoginExistingUser(props : any){
    const [emailInput, setEmailInput] = useState(" ")
    const [emailStyle, setEmailStyle] = useState("border border-gray-400 py-2 px-7 rounded w-full")

    function handleEmail() {
        switch(emailInput){
            case "da":
                setEmailStyle("border-2 border-red-400 focus:border-red-400 py-2 px-7 rounded w-full");
                console.log(emailInput);
                break;
            default:
                console.log(emailInput);
                break;
        }
    }

    const handleSubmit = (e : React.FormEvent<EventTarget>) => {
        e.preventDefault();
        console.log("Email input: " + emailInput)
        handleEmail()
    }


    return(
        <motion.div className="text-black bg-white p-8 rounded-lg sm:w-screen w-min space-y-2"
         /* <motion.div className="bg-white p-8 rounded-lg shadow-2xl sm:w-screen sm:h-1/3 md:w-1/2 lg:w-1/3 xl:w-1/4 h-2/3 space-y-2 border border-black"
                 */
                animate={{ y: 16 }}
                transition={{
                    type: "spring", stiffness: 100 }}>

                    <div className="flex flex-row justify-between mb-4">
                        <h1 className="text-2xl ">
                            Come on in
                        </h1>

                        <motion.button
                        className="text-2xl"
                        onClick={() => props.setLoginModal(false)}
                        whileHover={{ scale: 1.33 }}>
                            ×
                        </motion.button>
                    </div>

                    <div className="flex space-x-4 border-b border-gray-400">
                        <button className="font-bold border-b-2 border-black"
                        onClick={() => props.setNewUser(false)}>
                            SIGN IN
                        </button>

                        <button className="text-gray-500 hover:text-black focus:font-black  focus:text-black hover:filter"
                        onClick={() => props.setNewUser(true)}>
                            <div>I'M NEW HERE</div>
                        </button>
                    </div>


                    <form autoComplete="off" onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <label className="mt-2 text-lg">
                                E-mail address
                            </label>
                            <input
                                // className="border border-gray-400 py-2 px-7 rounded w-full"
                                className={emailStyle}
                                placeholder="jane.smith@example.com"
                                type="text"
                                onChange={(e) => {setEmailInput(e.target.value)}}
                                />
                        </div>

                        <label className="mt-2 text-lg">
                            Password
                        </label>
                        <input
                            type="password"
                            className="border border-gray-400 py-2 px-7 rounded w-full"
                            placeholder="********">
                        </input>

                        <div className="flex">
                            <input type="checkbox"
                                className="mt-1 mr-1 accent-black">
                            </input>
                            <div>Keep me signed in.</div>
                        </div>

                        <Link href="/forgot">
                            <button className="text-sm">
                                Forgot your password?
                            </button>
                        </Link>

                        <div className="flex flex-row justify-center">
                            <button className="text-white font-semibold bg-gray-800 py-2 w-96 rounded-xl">
                                Sign in
                            </button>
                        </div>
                    </form>

                    <div className="flex flex-row justify-center">
                        OR
                    </div>

                    <div className="flex flex-row justify-center">
                        <button className="grid grid-cols-5 border border-black rounded py-2 w-96">
                            <IconContext.Provider value={{ size: '24px'}}>
                                <FcGoogle className="ml-4"/>
                            </IconContext.Provider>
                            <div className="col-span-3 font-bold">Continue with Google</div>
                        </button>
                    </div>

                    <div className="flex flex-row justify-center">
                        <button className="grid grid-cols-5 border border-black rounded py-2 w-96">
                            <IconContext.Provider value={{ size: '24px'}}>
                                <FaApple className="ml-4"/>
                            </IconContext.Provider>
                            <div className="col-span-3 font-bold">Continue with Apple</div>
                        </button>
                    </div>

                    <div className="flex flex-row justify-center ">
                        <button className="grid grid-cols-5 border border-black rounded py-2 w-96">
                            <IconContext.Provider value={{ color: '#3b5998', size: '24px'}}>
                                <MdFacebook className="ml-4"/>
                            </IconContext.Provider>
                            <div className="col-span-3 font-bold">Continue with Facebook</div>
                        </button>
                    </div>

                    <div className="flex flex-row justify-center">
                        <button className="mt-4" onClick={() => props.setNewUser(true)}>
                            New to BPLR? Register.
                        </button>
                    </div>
        </motion.div>
    )
}

export default LoginExistingUser;

