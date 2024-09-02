import React from 'react';
import AppRouter from './approuter';
import Footer from './components/footer/footer';
import './styles/main.scss';

function App() {
  return (
    <div className="app-container">
      <div className="main-content">
        <AppRouter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
