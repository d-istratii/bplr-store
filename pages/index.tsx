import Navbar from 'components/Navbar';
import Slider from 'components/Swiper';
import Contact from 'components/Contact';
import Newsletter from 'components/Newsletter';
import Steps from 'components/Steps';
import Footer from 'components/Footer';
import { Provider } from 'react-redux';
import { store } from 'state/store';
import { useState, useEffect, useLayoutEffect } from 'react';
import Loading from 'components/Loading';

// import Cookies from "components/Cookies"

export default function Home() {
    return (
        <div>
            <Provider store={store}>
                <Navbar />
            </Provider>
            <Slider />
            <Contact />
            <Newsletter />
            <Steps />
            <Footer />
            {/* <Cookies /> */}
        </div>
    );
}
