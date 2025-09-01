import { useEffect, useState } from "react";
import heroImage from "../assets/images/HeroImg.png";
import Button from "../components/Button/Button.js";
import Scissors from "../assets/images/scissors.png";
import Thread from "../assets/images/thread_spool.png";
import Shirt from "../assets/images/shirt.png";
import MobileSlideshow from "../components/MobileSlideshow/MobileSlideShow.js";
import TestimonialCarousel from "../components/TestimonialCarousel/TestimonialCarousel.js";
import { Link } from "react-router-dom";

export default function Home({ lang }) {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // simple strings
    const text = {
        heroAlt: lang === "es" ? "Sastre en acción" : "Tailor at work",
        heroL1: lang === "es" ? "Elegancia hecha a medida." : "Crafted Elegance.",
        heroL2: lang === "es" ? "Pensada para ti." : "Tailored to You.",
        cta: lang === "es" ? "Contáctanos" : "Contact Us",
        f1: lang === "es" ? "Sastrería a Medida" : "Custom Tailoring",
        f2: lang === "es" ? "Arreglos y Reparaciones" : "Alterations & Repairs",
        f3: lang === "es" ? "Colección Listo-para-Usar" : "Ready-to-Wear Collection",
    };

    return (
        <div className="home">
            <section className="hero">
                <img className="hero__image" src={heroImage} alt={text.heroAlt} />
                <div className="hero__text">
                    <p>{text.heroL1}<br />{text.heroL2}</p>
                    <Link to="/contact">
                        <Button txt={text.cta} />
                    </Link>
                </div>

            </section>

            <MobileSlideshow lang={lang} />

            {screenWidth >= 768 && (
                <section className="features">
                    <div className="features__item">
                        <img src={Scissors} alt={text.f1} />
                        <h2>{text.f1}</h2>
                    </div>
                    <div className="features__item">
                        <img src={Thread} alt={text.f2} />
                        <h2>{text.f2}</h2>
                    </div>
                    <div className="features__item">
                        <img src={Shirt} alt={text.f3} />
                        <h2>{text.f3}</h2>
                    </div>
                </section>
            )}

            <section className="testimonials">
                <TestimonialCarousel lang={lang} />
            </section>
        </div>
    );
}
