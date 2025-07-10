import { useEffect, useState } from "react";
import "./TestimonialCarousel.scss";

const TestimonialCarousel = () => {

    const testimonials = [

        {
            quote: "Fidel made my wedding day unforgettable. The suit felt like royalty!",
            name: "Carlos M.",
            location: "Miami, FL",
        },
        {
            quote: "The attention to detail was incredible. I’ve never worn anything so well-fitted.",
            name: "James L.",
            location: "New York, NY",
            image: "/images/client2.jpg",
        },
        {
            quote: "I’ve trusted Aquino Tailor for years. Every piece speaks quality.",
            name: "Miguel R.",
            location: "Allapattah, FL",
            image: "/images/client3.jpg",
        },
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const goTo = (direction) => {
        setIndex((prev) =>
            direction === 'next'
                ? (prev + 1) % testimonials.length
                : (prev - 1 + testimonials.length) % testimonials.length
        );
    };

    return (
        <div className="testimonial__carousel">
            <div className="testimonial__card">
                <p className="testimonial__quote">“{testimonials[index].quote}”</p>
                <div className="testimonial__author">
                    <div>
                        <strong>{testimonials[index].name}</strong>
                        <div>{testimonials[index].location}</div>
                    </div>
                </div>
                <div className="carousel__controls">
                    <button onClick={() => goTo('prev')}>&larr;</button>
                    <button onClick={() => goTo('next')}>&rarr;</button>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCarousel;
