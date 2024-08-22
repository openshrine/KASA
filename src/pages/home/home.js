// src/pages/Home.js
import React from 'react';
import Banner from '../../components/banner/banner';
import Bandeau from '../../components/bandeauHome/bandeauHome';
import logements from '../../data.json';
import { Link } from 'react-router-dom';
import '../home/home.scss';

function Home() {
    return (
        <div>
            <Banner />
            <Bandeau />
            <div className="home">

                <div className="home__grid">
                    {logements.map(logement => (
                        <Link to={`/logement/${logement.id}`} key={logement.id} className="card">
                            <div className="card__image" style={{ backgroundImage: `url(${logement.cover})` }}></div>
                            <div className="card__info">
                                <h2 className="card__title">{logement.title}</h2>
                                <p className="card__location">{logement.location}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>



    );
}

export default Home;
