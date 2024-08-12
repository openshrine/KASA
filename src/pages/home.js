// src/pages/Home.js
import React from 'react';
import Banner from '../components/banner';
import '../assets/scss/home.scss';

function Home() {
    return (
        <div>
            <Banner />
            <h1>Chez vous, partout et ailleurs</h1>
            <p>Bienvenue sur la page d'accueil de KASA.</p>
        </div>
    );
}

export default Home;
