import React from "react";
import Link from "next/link";

function Description() {
    return (
        <div className="p-4 flex flex-col items-center justify-between w-full h-screen bg-center bg-cover bg-tshirt-img bg-white text-white text-lg space-y-4">
            <div></div>

            <div className="flex flex-col items-center space-y-2">
                <div>T-SHIRTS</div>
                <div>MADE TO ORDER.</div>
                <Link href ="/designer/t-shirts">
                    <button className="bg-gray-400 text-white font-bold py-2 px-6 rounded">
                        SHOP NOW
                    </button>
                </Link>
            </div>

            <div className="space-x-2">
                <input type="radio" className="accent-black"></input>
            </div>
        
        </div>
    )
}

export default Description;