import CustomTailoring from '../assets/images/AQUINO-4.png';
import AlterationsRepairs from '../assets/images/AQUINO-5.png';
import Ready2WearCollection from '../assets/images/AQUINO-1.png';

const Services = () => {
    const services = [
        {
            title: 'Custom Tailoring',
            description: 'Handcrafted suits, shirts, and formalwear made to your exact measurements and style preferences.',
            image: CustomTailoring,
        },
        {
            title: 'Alterations & Repairs',
            description: 'We restore, adjust, and repair garments with precision to extend their life and improve fit.',
            image: AlterationsRepairs,
        },
        {
            title: 'Ready-to-Wear Collection',
            description: 'A curated line of high-quality garments designed by Aquino, available for immediate wear.',
            image: Ready2WearCollection,
        },
    ];
    return (
        <div className="services">
            <h1 className='services__title'>Our Services</h1>
            <div className="services__grid">
                {services.map((service, index) => (
                    <div key={index} className="service__card">
                        <img className="services__img" src={service.image} alt={service.title} />
                        <h2 className='services__subTitle'>{service.title}</h2>
                        <p className='services__text'>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;