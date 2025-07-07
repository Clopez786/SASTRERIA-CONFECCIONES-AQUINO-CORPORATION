import Home from "./home.js";
import About from "./about.js";
import Gallary from "./gallary.js";
import Services from "./services.js";
import NotFound from "./notFound.js";
import { Route, Routes } from "react-router-dom";

const PageWrapper = () => {
    return (
        <>
            <header>
                <h1>This is the header</h1>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/gallary" element={<Gallary />} />
                <Route path="/services" element={<Services />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
            <main>
                <h2>This is where the hero element goes</h2>
            </main>
            <footer>
                <h1>This is the footer</h1>
            </footer>
        </>
    )
}

export default PageWrapper;
