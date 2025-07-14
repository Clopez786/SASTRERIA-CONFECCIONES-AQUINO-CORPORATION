import Gallery1 from '../assets/images/gallery/AQUINO-2.png';
import Gallery2 from '../assets/images/gallery/AQUINO-3.png';
import Gallery3 from '../assets/images/gallery/AQUINO-7.png';
import Gallery4 from '../assets/images/gallery/AQUINO-2.png';
import Gallery5 from '../assets/images/gallery/AQUINO-3.png';
import Gallery6 from '../assets/images/gallery/AQUINO-7.png';

const galleryImages = [Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6];

export default function Gallery() {
    return (
        <div className="gallery">
            <h1 className="gallery__title">Gallery</h1>
            <div className="gallery__grid">
                {galleryImages.map((image, index) => (
                    <div className="gallery__item" key={index}>
                        <img className="gallery__img" src={image} alt={`Gallery item ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}