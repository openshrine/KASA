// src/components/Bandeau.js
import React from 'react';
import '../assets/scss/bandeauHome.scss';

function Bandeau() {
    return (
        <div className="bandeau">
            <div className="bandeau__overlay">
                <h1 className="bandeau__text">Chez vous, partout et ailleurs</h1>
            </div>
        </div>
    );
}

export default Bandeau;
