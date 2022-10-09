import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function TestComponent() {
    const [pageScrollState, setPageScrollState] = useState(false);

    const pageScrollHandler = () => {
        if (window.scrollY > 0) {
            setPageScrollState(true);
        } else setPageScrollState(false);
    };

    const variants = {
        open: { y: 96 },
        closed: { y: 0 },
    };

    useEffect(() => {
        window.addEventListener("scroll", pageScrollHandler);
    });

    return (
        <div>
            <div className="fixed inset-x-0 top-0 h-24 bg-gradient-to-b z-0 from-neutral-900"></div>
            <motion.div
                className="fixed inset-x-0 -top-24 h-24 bg-neutral-900"
                animate={pageScrollState ? "open" : "closed"}
                variants={variants}
                transition={{ ease: "anticipate", duration: 0.8 }}
            ></motion.div>
            <div className="bg-fixed h-screen text-white bg-pants-img"></div>
            <div className="h-screen text-white bg-neutral-900 flex flex-row justify-center items-center">
                <h1 className="text-8xl">Description</h1>
            </div>
        </div>
    );
}

export default TestComponent;
