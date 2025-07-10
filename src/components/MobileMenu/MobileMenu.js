import { useState } from "react";
import { Link } from "react-router-dom";
import "./mobileMenu.scss";

const MobileMenu = () => {

    const [isOpen, setIsOpen] = useState(false);

    const HamburgerIcon = (
        <svg width="30" height="30" viewBox="0 0 100 80" fill="#2C2C2C">
            <rect width="100" height="10" />
            <rect y="30" width="100" height="10" />
            <rect y="60" width="100" height="10" />
        </svg>
    );

    const CloseIcon = (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2C2C2C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
    );


    return (
        <div className="mobile__menu">
            <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? CloseIcon : HamburgerIcon}
            </button>

            {isOpen && (
                <div className="dropdown">
                    <Link to="/about" on onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/services" on onClick={() => setIsOpen(false)}>Services</Link>
                    <Link to="/gallery" on onClick={() => setIsOpen(false)}>Gallery</Link>
                </div>
            )}
        </div>
    )
}

export default MobileMenu;