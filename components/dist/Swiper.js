"use strict";
exports.__esModule = true;
var react_1 = require("swiper/react");
var swiper_1 = require("swiper");
var framer_motion_1 = require("framer-motion");
var link_1 = require("next/link");
require("swiper/css");
require("swiper/css/navigation");
require("swiper/css/pagination");
require("swiper/css/autoplay");
function Slider() {
    return (React.createElement("div", null,
        React.createElement(react_1.Swiper, { modules: [swiper_1.Navigation, swiper_1.Pagination, swiper_1.Autoplay], slidesPerView: 1, navigation: true, autoplay: { delay: 3000 }, pagination: { clickable: true } },
            React.createElement(react_1.SwiperSlide, null,
                React.createElement("div", { className: "z-0 flex h-screen w-full flex-col items-center justify-between space-y-4 bg-tshirt-img bg-cover bg-center p-4 text-lg text-white" },
                    React.createElement("div", { className: "flex-none" }),
                    React.createElement("div", { className: "flex flex-col items-center space-y-2" },
                        React.createElement("h1", { className: "text-8xl sm:text-5xl" }, "T-SHIRTS"),
                        React.createElement("h1", { className: "bg-gradient-to-r from-indigo-600 to-rose-300 bg-clip-text text-6xl font-extrabold text-transparent sm:text-3xl" }, "MADE TO ORDER"),
                        React.createElement(link_1["default"], { href: "/designer/t-shirts", passHref: true },
                            React.createElement(framer_motion_1.motion.button, { whileHover: {
                                    scale: 1.1,
                                    transition: { duration: 0.3 }
                                }, className: "rounded bg-white py-2 px-6 font-bold text-neutral-900" }, "SHOP NOW"))),
                    React.createElement("div", null))),
            React.createElement(react_1.SwiperSlide, null,
                React.createElement("div", { className: "z-0 flex h-screen w-full flex-col items-center justify-between space-y-4 bg-shirts-img bg-cover bg-center p-4 text-lg text-white" },
                    React.createElement("div", { className: "flex-none" }),
                    React.createElement("div", { className: "flex flex-col items-center space-y-2" },
                        React.createElement("h1", { className: "text-8xl sm:text-5xl" }, "SHIRTS"),
                        React.createElement("h1", { className: "bg-gradient-to-r from-indigo-600 to-rose-300 bg-clip-text text-6xl font-extrabold text-transparent sm:text-3xl" }, "MADE TO ORDER"),
                        React.createElement(link_1["default"], { href: "/designer/t-shirts", passHref: true },
                            React.createElement(framer_motion_1.motion.button, { whileHover: {
                                    scale: 1.1,
                                    transition: { duration: 0.3 }
                                }, className: "rounded bg-white py-2 px-6 font-bold text-neutral-900" }, "SHOP NOW"))),
                    React.createElement("div", null))),
            React.createElement(react_1.SwiperSlide, null,
                React.createElement("div", { className: "z-0 flex h-screen w-full flex-col items-center justify-between space-y-4  bg-accessories-img bg-cover bg-center object-left p-4 text-lg text-white sm:bg-right" },
                    React.createElement("div", { className: "flex-none" }),
                    React.createElement("div", { className: "flex flex-col items-center space-y-2" },
                        React.createElement("h1", { className: "text-8xl sm:text-4xl" }, "ACCESSORIES"),
                        React.createElement("h1", { className: "bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-6xl font-extrabold text-transparent sm:text-3xl" }, "MADE TO ORDER"),
                        React.createElement(link_1["default"], { href: "/designer/t-shirts", passHref: true },
                            React.createElement(framer_motion_1.motion.button, { whileHover: {
                                    scale: 1.1,
                                    transition: { duration: 0.3 }
                                }, className: "rounded bg-neutral-900 py-2 px-6 font-bold text-white" }, "SHOP NOW"))),
                    React.createElement("div", { className: "flex-none" }))),
            React.createElement(react_1.SwiperSlide, null,
                React.createElement("div", { className: "z-0 flex h-screen w-full flex-col items-center justify-between space-y-4  bg-pants-img bg-cover bg-center p-4 text-lg text-white sm:bg-right" },
                    React.createElement("div", { className: "flex-none" }),
                    React.createElement("div", { className: "flex flex-col items-center space-y-2" },
                        React.createElement("h1", { className: "text-8xl text-neutral-900 sm:text-5xl" }, "PANTS"),
                        React.createElement("h1", { className: "text-6xl font-extrabold text-neutral-900 sm:text-3xl" }, "MADE TO ORDER"),
                        React.createElement(link_1["default"], { href: "/designer/t-shirts", passHref: true },
                            React.createElement(framer_motion_1.motion.button, { whileHover: {
                                    scale: 1.1,
                                    transition: { duration: 0.3 }
                                }, className: "rounded bg-neutral-900 py-2 px-6 font-bold text-white" }, "SHOP NOW"))),
                    React.createElement("div", null))),
            React.createElement(react_1.SwiperSlide, null,
                React.createElement("div", { className: "z-0 flex h-screen w-full flex-col items-center justify-between space-y-4  bg-shoes-img bg-cover bg-center p-4 text-lg text-white" },
                    React.createElement("div", { className: "flex-none" }),
                    React.createElement("div", { className: "flex flex-col items-center space-y-2" },
                        React.createElement("h1", { className: "text-8xl sm:text-5xl" }, "SHOES"),
                        React.createElement("h1", { className: "bg-gradient-to-l from-slate-200 to-neutral-400 bg-clip-text text-6xl font-extrabold text-transparent sm:text-3xl" }, "MADE TO ORDER"),
                        React.createElement(link_1["default"], { href: "/designer/t-shirts", passHref: true },
                            React.createElement(framer_motion_1.motion.button, { whileHover: {
                                    scale: 1.1,
                                    transition: { duration: 0.3 }
                                }, className: "rounded bg-white py-2 px-6 font-bold text-neutral-900" }, "SHOP NOW"))),
                    React.createElement("div", null))))));
}
exports["default"] = Slider;
