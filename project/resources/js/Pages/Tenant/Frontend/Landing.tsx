import React, { useEffect } from 'react';
import { Head } from '@inertiajs/react';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Features from './Components/Features';
import Footer from './Components/Footer';

const Landing = () => {
    useEffect(() => {
        const scrollFunction = () => {
            const element = document.getElementById("back-to-top");
            if (element) {
                if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                    element.style.display = "block";
                } else {
                    element.style.display = "none";
                }
            }
        };

        window.addEventListener('scroll', scrollFunction);
        return () => window.removeEventListener('scroll', scrollFunction);
    }, []);

    const toTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    return (
        <React.Fragment>
            <Head title='Selamat Datang' />
            <div className="layout-wrapper landing">
                <Navbar />
                <Home />
                <Features />
                {/* Future sections like Plans or Team can be added here if needed */}
                <Footer />

                <button onClick={toTop} className="btn btn-danger btn-icon landing-back-top" id="back-to-top">
                    <i className="ri-arrow-up-line"></i>
                </button>
            </div>
        </React.Fragment>
    );
};

export default Landing;
