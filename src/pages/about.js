import React, { useState } from 'react';
import Banner from '../components/banner';
import Bandeau from '../components/bandeauAbout';
import '../assets/scss/about.scss';

function Dropdown({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown">
            <button className="dropdown__button" onClick={toggleDropdown}>
                {title}
                <i
                    className={`fa-solid ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'} dropdown__arrow`}
                    style={{ color: '#ffffff' }}
                ></i>
            </button>
            {isOpen && <div className="dropdown__content">{content}</div>}
        </div>
    );
}

function About() {
    return (
        <div>
            <div>
                <Banner />
                <Bandeau />
            </div>
            <div className="about">

                <Dropdown
                    title="Fiabilité"
                    content="Les annonces passées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
                />
                <Dropdown
                    title="Respect"
                    content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."
                />
                <Dropdown
                    title="Service"
                    content="Les annonces passées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
                />
                <Dropdown
                    title="Sécurité"
                    content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes ques pour les voyageurs, chaque logement corrspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                />
            </div>
        </div>
    );
}

export default About;