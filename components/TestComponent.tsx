import React from "react";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import Slider from "./Swiper";
import Footer from "./Footer";
import Description from "./Description";

function TestComponent() {
    return (
        <div>
            <Slider />
            <Footer />
        </div>
    );
}

export default TestComponent;
