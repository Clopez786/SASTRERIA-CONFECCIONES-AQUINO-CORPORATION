import { useState } from "react";
import { Link } from "react-router-dom";
import InstagramLogo from '../../assets/images/01 Static Glyph/01 Gradient Glyph/Instagram_Glyph_Gradient.png'
import "./MobileMenu.scss";

const MobileMenu = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mobile-menu">
            <button className="mobile-menu__toggle" onClick={() => setIsOpen(!isOpen)}>
                <span className="bar" />
                <span className="bar" />
                <span className="bar" />
            </button>

            {isOpen && (
                <nav className="mobile-menu__dropdown">
                    <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
                    <Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
                </nav>
            )}
        </div>
    );
}

export default MobileMenu;