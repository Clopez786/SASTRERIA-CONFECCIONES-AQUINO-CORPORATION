import heroImage from "../assets/images/HeroImg.png";
import Button from "../components/Button/Button.js";
import Scissors from "../assets/images/scissors.png";
import Thread from "../assets/images/thread_spool.png";
import Shirt from "../assets/images/shirt.png";
import MobileSlideshow from "../components/MobileSlideshow/MobileSlideshow.js";
import { useEffect, useState } from "react";
import TestimonialCarousel from "../components/TestimonialCarousel/TestimonialCarousel.js";

export default function Home() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="home">
            <section className="hero">
                <img className="hero__image" src={heroImage} alt="Tailor at work" />
                <div className="hero__text">
                    <p>Crafted Elegance.<br />Tailored to You.</p>
                    <Button txt="Contact Us" />
                </div>
            </section>

            <MobileSlideshow />

            {screenWidth >= 768 && (
                <section className="features">
                    <div className="features__item">
                        <img src={Scissors} alt="Custom Tailoring" />
                        <h2>Custom Tailoring</h2>
                    </div>
                    <div className="features__item">
                        <img src={Thread} alt="Alterations & Repairs" />
                        <h2>Alterations & Repairs</h2>
                    </div>
                    <div className="features__item">
                        <img src={Shirt} alt="Ready to Wear" />
                        <h2>Ready-to-Wear Collection</h2>
                    </div>
                </section>
            )}

            <section className="testimonials">
                <TestimonialCarousel />
            </section>
        </div>
    );
}