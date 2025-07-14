import Home from "./Home.js";
import About from "./About.js";
import Gallery from "./Gallery.js";
import Services from "./Services.js";
import NotFound from "./NotFound.js";
import Logo from "../assets/images/favicon.png";
import InstagramLogo from "../assets/images/01 Static Glyph/01 Gradient Glyph/Instagram_Glyph_Gradient.svg";
import "../assets/styles/main.scss";
import Button from "../components/Button/Button.js";
import { Link, Route, Routes } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import MobileMenu from "../components/MobileMenu/MobileMenu.js";

const PageWrapper = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [showHeader, setShowHeader] = useState(true);
    const lastScrollY = useRef(window.scrollY);
    const scrollTimeout = useRef(null);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // hide on scroll down
            if (currentScrollY > lastScrollY.current) {
                setShowHeader(false);
            }

            // show on scroll up
            if (currentScrollY < lastScrollY.current) {
                setShowHeader(true);
            }

            lastScrollY.current = currentScrollY;

            // show after user stops scrolling for 200ms
            if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
            scrollTimeout.current = setTimeout(() => {
                setShowHeader(true);
            }, 200);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="wrapper">
            <header className={`header ${showHeader ? 'visible' : 'hidden'}`}>
                <Link to="/" className="header__logo">
                    <img src={Logo} alt="Aquino Tailor logo" />
                </Link>


                {isMobile ? (
                    <div className="header__right">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img className="header__social" src={InstagramLogo} alt="Instagram" />
                        </a>
                        <MobileMenu />
                    </div>

                ) : (
                    <nav className="header__nav">
                        <Link to="/about">About</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/gallery">Gallery</Link>
                        <Link to="/">
                            <Button txt="Book Now" />
                        </Link>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src={InstagramLogo} alt="Instagram" />
                        </a>
                    </nav>
                )}


            </header>
            <div className="header__spacer" />
            <main className="main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>

            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} Aquino Tailor</p>
            </footer>
        </div>
    );
}

export default PageWrapper;
