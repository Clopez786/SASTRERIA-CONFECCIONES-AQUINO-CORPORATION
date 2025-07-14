import Profile from '../assets/images/AQUINO-9.png';

const About = () => {
    return (
        <div className="about">
            <div className="about__header">
                <h1>About Us</h1>
                <p className='about__mobile'>
                    Founded by master tailor Fidel Aquino,
                    our shop brings over 40 years of experience to every stitch.
                    From custom suits to precise alterations,
                    Aquino Tailor is built on family tradition,
                    fine detail, and timeless style.
                    Whether you're dressing for work or celebration,
                    we tailor garments that tell your story.
                </p>
                <p className='about__tabletDesktop'>
                    At Aquino Tailor, craftsmanship isn't just a skill —
                    it's a legacy passed down through generations.
                    Founded by Fidel Aquino,
                    a master tailor with over 40 years of experience,
                    the business was born out of a love for detail,
                    discipline, and the timeless elegance of custom garments.
                    <br />
                    Fidel began his journey in tailoring as a young apprentice
                    in the Dominican Republic, where he studied under seasoned
                    artisans who valued every stitch and seam.
                    After moving to the United States,
                    he brought that same commitment to quality with him
                    — founding Aquino Tailor as a humble home-based workshop
                    that has since grown into a trusted local brand known
                    for sophistication, integrity, and impeccable fit.
                    <br />
                    From hand-measured suits to elegant alterations and
                    limited-run ready-to-wear collections,
                    Aquino Tailor is built on the belief that your clothing
                    should tell your story — one that's bold, intentional, and refined.
                    <br />
                    Today, the Aquino name stands for more than just garments.
                    It's about preserving a tradition of elegance in a
                    fast-moving world. Whether you're stepping into a boardroom,
                    down the aisle, or onto a red carpet, we're here to
                    ensure you look and feel tailored to perfection.
                </p>
            </div>

            <div className="about__main">
                <img
                    src={Profile}
                    alt="Fidel Aquino, Founder"
                    className="about__image"
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