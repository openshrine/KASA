// src/components/Banner.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logoKasa.png';
import '../banner/banner.scss';

function Banner() {
    return (
        <header className="banner">
            <div>
                <img src={logo} alt="KASA logo" className="banner__logo" />
            </div>
            <nav>
                <ul className="banner__nav-list">
                    <li className="banner__nav-item">
                        <Link to="/" className="banner__nav-link">Accueil</Link>
                    </li>
                    <li className="banner__nav-item">
                        <Link to="/about" className="banner__nav-link">A propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Banner;
