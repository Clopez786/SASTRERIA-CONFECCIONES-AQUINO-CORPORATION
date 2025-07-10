import Profile from '../assets/images/AQUINO-9.png';

const About = () => {
    return (
        <div className="about">
            <div className="about__header">
                <h1>About Us</h1>
                <p>
                    With over 20 years of tailoring expertise, Aquino Tailor is committed
                    to delivering exceptional craftsmanship and personalized service.
                </p>
            </div>

            <div className="about__main">
                <img
                    src={Profile}
                    alt="Fidel Aquino, Founder"
                    className="founder__img"
                />
                <div className="about__text">
                    <h2>My Story</h2>
                    <div className="timeline">
                        <div>
                            <h3>2003</h3>
                            <p>Aquino Tailor founded by Fidel Aquino.</p>
                        </div>
                        <div>
                            <h3>2007</h3>
                            <p>Enter text here.</p>
                        </div>
                        <div>
                            <h3>2021</h3>
                            <p>Enter text here.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;