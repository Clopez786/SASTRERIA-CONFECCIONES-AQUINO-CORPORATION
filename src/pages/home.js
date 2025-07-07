import heroImage from "../assets/images/HeroImg.png";
import Button from "../components/Btn/button.js";
import Scissors from "../assets/images/scissors.png";
import Thread from "../assets/images/thread_spool.png";
import Shirt from "../assets/images/shirt.png";

const Home = () => {
    return (
        <div>
            <div className="hero">
                <img className="hero__image" src={heroImage} alt="" />
                <div>
                    <p>Crafted Elegance. <br /> Tailord to You.</p>
                    <Button txt={"contact us"} />
                </div>
            </div>
            <div>
                <div>
                    <img src={Scissors} alt="" />
                    <h2>Custom Tailoring</h2>
                </div>
                <div>
                    <img src={Thread} alt="" />
                    <h2>Alterations & Repairs</h2>
                </div>
                <div>
                    <img src={Shirt} alt="" />
                    <h2>Ready to Wear Collections</h2>
                </div>
            </div>
        </div>
    )
}

export default Home;
