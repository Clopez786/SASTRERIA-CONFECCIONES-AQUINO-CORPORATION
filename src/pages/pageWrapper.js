import Home from "./home.js";
import About from "./about.js";
import Gallary from "./gallary.js";
import Services from "./services.js";
import NotFound from "./notFound.js";
import Logo from "../assets/images/favicon.png";
import InstagramLogo from "../assets/images/01 Static Glyph/01 Gradient Glyph/Instagram_Glyph_Gradient.svg";
import "../assets/styles/global.scss";
import Button from "../components/Btn/button.js";
import { Link, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import MobileMenu from "../components/MobileMenu/MobileMenu.js";

const PageWrapper = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleSize = () => setScreenWidth(window.innerWidth);

        window.addEventListener('resize', handleSize);

        return () => window.removeEventListener('resize', handleSize);
    }, []);

    return (
        <>
            <header className="header">
                <a href="/"><img className="header__image" src={Logo} alt="person making a new clothing item" /></a>
                <nav className="header__holder">
                    <div className={`header__list ${screenWidth >= 768 ? 'hide' : ''}`}>
                        <MobileMenu />
                    </div>
                    <ul className={`header__list ${screenWidth < 768 ? 'hide' : ''}`}>
                        <Link to="/about">About</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/gallery">Gallery</Link>
                    </ul>
                </nav>
                <Button txt={"contact us"} />
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/gallery" element={<Gallary />} />
                <Route path="/services" element={<Services />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <footer className="footer">
                <a href="/"><img className="footer__image" src={Logo} alt="person making a new clothing item" /></a>
                <p className="footer__txt">Master craftmanship and timeless style.</p>
                <a href="www.instagram.com"><img className="footer__icon" src={InstagramLogo} alt="" /></a>
            </footer>
        </>
    )
}

export default PageWrapper;
