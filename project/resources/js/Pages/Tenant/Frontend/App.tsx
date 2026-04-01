import React, { useEffect } from 'react';
import { Head } from '@inertiajs/react';
import AppNavbar from "./Components/AppNavbar";
import AppHero from "./Components/AppHero";
import AppGrid from "./Components/AppGrid";
import Features from './Components/Features';
import Footer from './Components/Footer';

interface Props {
    tenantName: string;
    member?: any;
}

const App: React.FC<Props> = ({ tenantName, member }) => {
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
            <Head title={`${tenantName} - Dashboard Member`} />
            <div className="layout-wrapper landing">
                <AppNavbar />
                <AppHero />
                <AppGrid />
                <Features />
                <Footer />

                <button onClick={toTop} className="btn btn-danger btn-icon landing-back-top" id="back-to-top">
                    <i className="ri-arrow-up-line"></i>
                </button>
            </div>
        </React.Fragment>
    );
};

export default App;
