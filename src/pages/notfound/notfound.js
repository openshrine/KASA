import React from 'react';
import { Link } from 'react-router-dom';
import Bandeau from '../../components/banner/banner';
import Footer from '../../components/footer/footer';
import './../notfound/notfound.scss';

const NotFound = () => {
    return (
        <div className="notfound-page">
            <Bandeau />
            <div className="notfound-content">
                <h1>404</h1>
                <p>Le logement que vous demandez n'existe pas.</p>
                <Link to="/" className="back-home-link">
                    Revenir à la page d'accueil
                </Link>
            </div>
            <Footer />
        </div>
    );
};

export default NotFound;
