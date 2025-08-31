import LanguageToggle from '../components/LanguageToggle/LanguageToggle';
import Gallery1 from '../assets/images/gallery/AQUINO-2.png';
import Gallery2 from '../assets/images/gallery/AQUINO-3.png';
import Gallery3 from '../assets/images/gallery/AQUINO-7.png';
import Gallery4 from '../assets/images/gallery/CustomerOne.jpg';
import Gallery5 from '../assets/images/gallery/CustomerTwo.jpg';
import Gallery6 from '../assets/images/gallery/CustomerThree.jpg';
import Gallery7 from '../assets/images/gallery/CustomerFour.jpg';
import Gallery8 from '../assets/images/gallery/AquinoPhoto2.jpg';

const galleryImages = [Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6, Gallery7, Gallery8];

// All page text in one place (easy to edit)
const translations = {
    en: {
        title: 'Gallery',
        altPrefix: 'Gallery item',
    },
    es: {
        title: 'Galería',
        altPrefix: 'Elemento de galería',
    },
};

export default function Gallery({ lang = 'en', setLang }) {
    const t = translations[lang] || translations.en;

    return (
        <div className="gallery" lang={lang}>
            <div className="gallery__header">
                <div className="gallery__top">
                    <h1 className="gallery__title">{t.title}</h1>

                    {/* Show the toggle here only if you pass setLang (you can keep it header-only if you want) */}
                    {setLang && <LanguageToggle lang={lang} setLang={setLang} />}
                </div>
            </div>

            <div className="gallery__grid">
                {galleryImages.map((image, index) => (
                    <div className="gallery__item" key={index}>
                        <img
                            className="gallery__img"
                            src={image}
                            alt={`${t.altPrefix} ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
