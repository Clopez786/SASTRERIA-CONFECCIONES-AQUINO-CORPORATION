import { useState, useEffect } from 'react';
import './TestimonialCarousel.scss';

// Put EN and ES data side-by-side (easy to read & edit)
const testimonials = {
    en: [
        {
            quote: "Small local business that has been around forever, he does great work price is reasonable considering the cost of living has gone up, hey, I'm realistic. And only cash, I'm OK with that. This was $15, new hem, made the jacket new, very happy.",
            name: "Yadi Pineda",
            location: "Miami, FL",
            image: "/images/client1.jpg",
        },
        {
            quote: "Don Aquino is out of a movie. He's extremely kind as he is excellent at his trade as 'The Tailor'. I went in once because a co-worker of mine said his tailor can do emergency work. Soon meeting with him and some conversation, I decided to bring another article in. Then another and another, basically I am relieved to know I can bring him anything. VERY IMPORTANT: Don Aquino's true gift is having him make you a hand-made suit. You choose a fabric and he measures you for the perfectly Fitted Suit. I highly recommend it.",
            name: "Lionel Castillo",
            location: "Miami, FL",
            image: "/images/client2.jpg",
        },
        {
            quote: "Don Aquino is a staple in the Allapattah community. Many people come from as far as Canada to have him service their clothing. His attention to detail is unmatched. His passion and devotion for his craft is what makes us keep coming back to him. I highly recommend Don Aquino for your clothing alterations.",
            name: "Fernando Chavez",
            location: "Miami, FL",
            image: "/images/client2.jpg",
        },
    ],
    es: [
        {
            quote: "Pequeño negocio local que ha estado aquí desde siempre; hace un trabajo excelente y el precio es razonable considerando que el costo de vida ha subido—oye, soy realista. Y solo efectivo; a mí me parece bien. Esto fueron $15: dobladillo nuevo, dejó la chaqueta como nueva. Muy contento.",
            name: "Yadi Pineda",
            location: "Miami, FL",
            image: "/images/client1.jpg",
        },
        {
            quote: "Don Aquino parece salido de una película. Es sumamente amable y excelente en su oficio como sastre. Fui porque un compañero de trabajo me dijo que su sastre podía hacer trabajos de emergencia. Al conocerlo y conversar un poco, decidí llevarle otra prenda, luego otra y otra; me da tranquilidad saber que puedo llevarle lo que sea. MUY IMPORTANTE: su verdadero don es confeccionar un traje hecho a mano: tú eliges la tela y él te toma las medidas para un traje perfectamente entallado. Lo recomiendo muchísimo.",
            name: "Lionel Castillo",
            location: "Miami, FL",
            image: "/images/client2.jpg",
        },
        {
            quote: "Don Aquino es un referente en la comunidad de Allapattah. Muchas personas vienen desde lugares tan lejanos como Canadá para que atienda sus prendas. Su atención al detalle es incomparable. Su pasión y dedicación por su oficio son el motivo por el que volvemos una y otra vez. Recomiendo ampliamente a Don Aquino para sus arreglos de ropa.",
            name: "Fernando Chavez",
            location: "Miami, FL",
            image: "/images/client2.jpg",
        },
    ],
};

export default function TestimonialCarousel({ lang = "en" }) {
    const [index, setIndex] = useState(0);

    // pick the language data (fallback to EN)
    const data = testimonials[lang] || testimonials.en;

    // if language changes, reset to the first slide so indexes never mismatch
    useEffect(() => {
        setIndex(0);
    }, [lang]);

    // autoplay every 5s
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % data.length);
        }, 5000);
        return () => clearInterval(interval);
        // depend on data.length so it updates if lang changes
    }, [data.length]);

    const item = data[index];

    return (
        <div className="carousel">
            <div className="carousel__card">
                <p className="carousel__quote">“{item.quote}”</p>
                <div className="carousel__author">
                    {/* If you want to show the client image, uncomment: */}
                    {/* <img className="carousel__avatar" src={item.image} alt={`${item.name}`} /> */}
                    <div>
                        <strong>{item.name}</strong>
                        <div>{item.location}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
