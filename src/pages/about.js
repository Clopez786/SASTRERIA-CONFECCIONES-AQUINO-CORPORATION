import Profile from '../assets/images/AquinoProfilePhoto.png';
import LanguageToggle from '../components/LanguageToggle/LanguageToggle';

// All page text in one place (easy to edit/expand)
const translations = {
    en: {
        aria: { language: 'Language toggle' },
        title: 'About Us',
        tagline:
            'With over 20 years of tailoring expertise, Aquino Tailor is committed to delivering exceptional craftsmanship and personalized service.',
        myStory: 'My Story',
        timeline: [
            {
                title: 'From Óscar de la Renta to Miami',
                text:
                    'Fidel Aquino began his career in 1985 with world-renowned designer Óscar de la Renta, mastering men’s suits, women’s garments, and the full process of fashion manufacturing.',
            },
            {
                title: 'Founding Aquino Tailor',
                text:
                    'After moving to Miami, he opened Sastrería y Confecciones Aquino Corp, now known as Aquino Tailor, starting with just two sewing machines and growing to 16.',
            },
            {
                title: 'Craftsmanship & Community',
                text:
                    'Specializing in suits, guayaberas, and bridal gowns, Aquino has trained and employed many in the Dominican community, earning recognition from the Dominican American Chamber of Commerce and former Miami Mayor Tomás Regalado.',
            },
            {
                title: 'A Voice for Allapattah',
                text:
                    'Beyond tailoring, Aquino advocates for small businesses, fights gentrification, and works with The Allapattah Collaborative CDC to bring resources and preserve the neighborhood’s cultural identity.',
            },
        ],
        alt: 'Fidel Aquino, Founder',
        languageLabel: 'Language',
    },
    es: {
        aria: { language: 'Selector de idioma' },
        title: 'Sobre Nosotros',
        tagline:
            'Con más de 20 años de experiencia en sastrería, Aquino Tailor se compromete a ofrecer artesanía excepcional y un servicio personalizado.',
        myStory: 'Mi Historia',
        timeline: [
            {
                title: 'De Óscar de la Renta a Miami',
                text:
                    'Fidel Aquino inició su carrera en 1985 con el reconocido diseñador Óscar de la Renta, dominando los trajes de caballero, las prendas de dama y todo el proceso de manufactura de moda.',
            },
            {
                title: 'Fundación de Aquino Tailor',
                text:
                    'Tras mudarse a Miami, abrió Sastrería y Confecciones Aquino Corp, hoy conocida como Aquino Tailor, comenzando con solo dos máquinas de coser y creciendo hasta 16.',
            },
            {
                title: 'Artesanía y Comunidad',
                text:
                    'Especializado en trajes, guayaberas y vestidos de novia, Aquino ha formado y empleado a muchos en la comunidad dominicana, recibiendo reconocimientos de la Cámara de Comercio Dominico-Americana y del exalcalde de Miami, Tomás Regalado.',
            },
            {
                title: 'Una Voz para Allapattah',
                text:
                    'Más allá de la sastrería, Aquino aboga por los pequeños negocios, combate la gentrificación y colabora con The Allapattah Collaborative CDC para traer recursos y preservar la identidad cultural del vecindario.',
            },
        ],
        alt: 'Fidel Aquino, Fundador',
        languageLabel: 'Idioma',
    },
};

export default function About({ lang = 'en', setLang }) {
    const t = translations[lang] || translations.en;

    return (
        <div className="about" lang={lang}>
            <div className="about__header">
                {/* Header top row: title + language toggle component (only shown if setLang is provided) */}
                <div className="about__header-top">
                    <h1>{t.title}</h1>
                </div>

                <p>{t.tagline}</p>

            </div>

            <div className="about__main">
                <img src={Profile} alt={t.alt} className="about__image" />

                <div className="about__text">
                    <h2>{t.myStory}</h2>

                    <div className="timeline">
                        {t.timeline.map((item, idx) => (
                            <div key={idx}>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
