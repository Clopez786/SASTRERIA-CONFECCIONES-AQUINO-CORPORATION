import Home from "./home.js";
import About from "./about.js";
import Gallary from "./gallary.js";
import Services from "./services.js";
import NotFound from "./notFound.js";
import Logo from "../assets/images/favicon.png";
import InstagramLogo from "../assets/images/01 Static Glyph/01 Gradient Glyph/Instagram_Glyph_Gradient.svg";
import "../assets/styles/global.scss";
import Button from "../components/Btn/button.js";
import { Route, Routes } from "react-router-dom";

const PageWrapper = () => {
    return (
        <>
            <header className="header">
                <img className="header__image" src={Logo} alt="person making a new clothing item" />
                <nav className="header__holder">
                    <ul className="header__list">
                        <li>About</li>
                        <li>Services</li>
                        <li>Gallery</li>
                    </ul>
                </nav>
                <Button txt={"contact us"} />
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/gallary" element={<Gallary />} />
                <Route path="/services" element={<Services />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
            <footer className="footer">
                <img className="footer__image" src={Logo} alt="person making a new clothing item" />
                <p className="footer__txt">Master craftmanship and timeless style.</p>
                <img className="footer__icon" src={InstagramLogo} alt="" />
            </footer>
        </>
    )
}

export default PageWrapper;
