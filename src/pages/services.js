import LanguageToggle from '../components/LanguageToggle/LanguageToggle';
import CustomTailoring from '../assets/images/AQUINO-4.png';
import AlterationsRepairs from '../assets/images/AQUINO-5.png';
import Ready2WearCollection from '../assets/images/AQUINO-1.png';

// All page text in one place
const translations = {
    en: {
        pageTitle: 'Our Services',
        services: [
            {
                title: 'Custom Tailoring',
                description:
                    'Handcrafted suits, shirts, and formalwear made to your exact measurements and style preferences.',
                image: CustomTailoring,
            },
            {
                title: 'Alterations & Repairs',
                description:
                    'We restore, adjust, and repair garments with precision to extend their life and improve fit.',
                image: AlterationsRepairs,
            },
            {
                title: 'Ready-to-Wear Collection',
                description:
                    'A curated line of high-quality garments designed by Aquino, available for immediate wear.',
                image: Ready2WearCollection,
            },
        ],
    },
    es: {
        pageTitle: 'Nuestros Servicios',
        services: [
            {
                title: 'Sastrería a Medida',
                description:
                    'Trajes, camisas y prendas formales hechos a tu medida según tus preferencias de estilo.',
                image: CustomTailoring,
            },
            {
                title: 'Arreglos y Reparaciones',
                description:
                    'Restauramos, ajustamos y reparamos prendas con precisión para prolongar su vida y mejorar el calce.',
                image: AlterationsRepairs,
            },
            {
                title: 'Colección Listo-para-Usar',
                description:
                    'Una línea curada de prendas de alta calidad diseñadas por Aquino, listas para usar.',
                image: Ready2WearCollection,
            },
        ],
    },
};

export default function Services({ lang = 'en', setLang }) {
    const t = translations[lang] || translations.en;

    return (
        <div className="services" lang={lang}>
            <div className="services__header">
                <h1 className="services__title">{t.pageTitle}</h1>
                {setLang && <LanguageToggle lang={lang} setLang={setLang} />}
            </div>

            <div className="services__grid">
                {t.services.map((service, index) => (
                    <div key={index} className="service__card">
                        <img
                            className="services__img"
                            src={service.image}
                            alt={service.title}
                        />
                        <h2 className="services__subTitle">{service.title}</h2>
                        <p className="services__text">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
