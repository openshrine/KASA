// src/components/Footer.js
import React from 'react';
import logo from '../assets/logoKasa.png'; // Assurez-vous d'avoir un logo blanc dans ce dossier
import '../footer/footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <img src={logo} alt="KASA logo" className="footer__logo" />
            <p className="footer__text">© 2020 KASA. All rights reserved</p>
        </footer>
    );
}

export default Footer;
