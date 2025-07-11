import Gallery1 from '../assets/images/gallery/AQUINO-2.png';
import Gallery2 from '../assets/images/gallery/AQUINO-3.png';
import Gallery3 from '../assets/images/gallery/AQUINO-7.png';
import Gallery4 from '../assets/images/gallery/AQUINO-2.png';
import Gallery5 from '../assets/images/gallery/AQUINO-3.png';
import Gallery6 from '../assets/images/gallery/AQUINO-7.png';

const Gallary = () => {
    const galleryImages = [
        {
            alt: 'Tailored Suit Display',
            src: Gallery1,
        },
        {
            alt: 'Measuring Fabric for Custom Fit',
            src: Gallery2,
        },
        {
            alt: 'Hand Stitching Close-up',
            src: Gallery3,
        },
        {
            alt: 'Full Body Custom Tailoring',
            src: Gallery4,
        },
        {
            alt: 'Professional Garment Repair',
            src: Gallery5,
        },
        {
            alt: 'Ready-to-Wear Showcase',
            src: Gallery6,
        },
    ];
    return (
        <div className="gallery">
            <h1 className="gallery__title">Gallery</h1>
            <div className="gallery__grid">
                {galleryImages.map((image, index) => (
                    <div className="gallery__item" key={index}>
                        <img src={image.src} alt={image.alt} className="gallery__img" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Gallary;