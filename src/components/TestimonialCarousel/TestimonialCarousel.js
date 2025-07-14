import { useState, useEffect } from 'react';
import './TestimonialCarousel.scss';

const testimonials = [
    {
        quote: "Fidel made my wedding day unforgettable.",
        name: "Carlos M.",
        location: "Miami, FL",
        image: "/images/client1.jpg",
    },
    {
        quote: "The suit fit like royalty. Amazing service.",
        name: "James L.",
        location: "New York, NY",
        image: "/images/client2.jpg",
    },
];

export default function TestimonialCarousel() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="carousel">
            <div className="carousel__card">
                <p className="carousel__quote">“{testimonials[index].quote}”</p>
                <div className="carousel__author">
                    <div>
                        <strong>{testimonials[index].name}</strong>
                        <div>{testimonials[index].location}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}