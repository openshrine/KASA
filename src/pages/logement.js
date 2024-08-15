// src/pages/Logement.js
import React from 'react';
import { useParams } from 'react-router-dom';
import logements from '../data.json';
import Banner from '../components/banner';
import Carousel from '../components/carousel';
import Dropdown from '../components/dropdown';
import '../assets/scss/logement.scss';

function Logement() {
    const { id } = useParams();
    const logement = logements.find(logement => logement.id === id);

    if (!logement) {
        return <div>Logement non trouvé</div>;
    }

    return (
        <div>
            <Banner />
            <div className="logement">


                <div className="logement__header">
                    <Carousel pictures={logement.pictures} /> {/* Ajout du carrousel ici */}
                    <div className="logement__info">
                        <h1 className="logement__title">{logement.title}</h1>
                        <p className="logement__location">{logement.location}</p>
                        <div className="logement__tags">
                            {logement.tags.map((tag, index) => (
                                <span key={index} className="logement__tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                    <div className="logement__host">
                        <p>{logement.host.name}</p>
                        <img src={logement.host.picture} alt={logement.host.name} className="logement__host-picture" />
                    </div>
                </div>

                <div className="logement__details">
                    <span><Dropdown title="Description" content={logement.description} /></span>

                    <span><Dropdown
                        title="Équipements"
                        content={
                            <ul>
                                {logement.equipments.map((equipment, index) => (
                                    <li key={index}>{equipment}</li>
                                ))}
                            </ul>
                        }
                    /></span>
                </div>
            </div>
        </div>
    );
}

export default Logement;
