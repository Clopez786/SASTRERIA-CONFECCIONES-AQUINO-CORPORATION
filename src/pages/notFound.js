import { Link } from 'react-router-dom';
import NotFoundImage from '../assets/images/Notfound404.png'; // use a classy, on-brand image

const NotFound = () => {
    return (
        <div className="notfound">
            <img src={NotFoundImage} alt="404 Not Found" className="notfound__image" />
            <h1 className="notfound__title">Oops! Page not found.</h1>
            <p className="notfound__text">
                The page you’re looking for doesn’t exist or has been moved.
            </p>
            <Link to="/" className="notfound__button">
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;