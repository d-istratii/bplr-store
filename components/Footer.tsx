import React from "react";
import { IconContext } from "react-icons";
import { FaInstagram, FaFacebook } from "react-icons/fa";

function Footer() {
    return (
        <footer className="grid grid-row justify-items-center space-y-3 pt-3">

            {/* Social links */}
            <div className="flex space-x-3">
                <IconContext.Provider value={{ size: '21px'}}>
                    <button>
                        <FaInstagram/>
                    </button>
                </IconContext.Provider>

                <p>/</p>

                <IconContext.Provider value={{ size: '21px'}}>
                    <button>
                        <FaFacebook/>
                    </button>
                </IconContext.Provider>
            </div>

            {/* Disclaimer  */}
            <div>
                © 2021 / BIPOLAR CLOTHING
            </div>
        </footer>   
    )
}

export default Footer;