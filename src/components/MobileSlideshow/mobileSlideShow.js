import { useEffect, useState } from "react";
import Scissors from "../../assets/images/scissors.png";
import Thread from "../../assets/images/thread_spool.png";
import Shirt from "../../assets/images/shirt.png";
import "./mobileSlideShow.scss";

const slides = [
    <div>
        <img className="section1__image" src={Scissors} alt="" />
        <h2>Custom Tailoring</h2>
    </div>,
    // <div>
    //     <img className="section1__image" src={Thread} alt="" />
    //     <h2>Alterations & Repairs</h2>
    // </div>,
    // <div>
    //     <img className="section1__image" src={Shirt} alt="" />
    //     <h2>Ready to Wear Collections</h2>
    // </div>
]

const MobileSlideShow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);

    }, []);
    return (
        <div className="mobile-slideshow">
            {slides.map((content, index) => (
                <div key={index}
                    className={`slide ${index === currentIndex ? 'active' : ''}`}
                >
                    {content}
                </div>
            ))}
        </div>
    );
}

export default MobileSlideShow;