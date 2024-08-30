// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/about/about';
import Logement from './pages/logement/logement'
import NotFound from './pages/notfound/notfound';
import Footer from './components/footer/footer'


function AppRouter() {
    return (
        <Router>
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/logement/:id" element={<Logement />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />

            </div>
        </Router>
    );
}

export default AppRouter;
