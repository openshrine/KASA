
import React from 'react';
import logo from '../../assets/logoKasa.png';


function Footer() {
    return (
        <footer className="footer">
            <img src={logo} alt="KASA logo" className="footer__logo" />
            <p className="footer__text">© 2020 KASA. All rights reserved</p>
        </footer>
    );
}

export default Footer;
