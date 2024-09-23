import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
// 

import Accueil from './Pages/Accueil';
// import connexion from './Pages/connexion';
// import contact from './Pages/contact';
// import creation_compte from './Pages/creation_compte';
// import recherche from './Pages/recherche';
// import paiement from './Pages/paiement';
// import premiere_connexion from './Pages/premiere_connexion';
// import reservation from './Pages/reservation';
// import parametres_compte from './Pages/parametres_compte';



import './App.css'; 

function App() {
  return (

    <BrowserRouter>
          <h1>bonjour</h1>
      <Routes>
        <Route path="/" element={<Accueil />} />
        {/* <Route path="/users/:role" element={<connexion />} />
        <Route path="/contact" element={<contact />} />
        <Route path="/creation_compte" element={<creation_compte />} />
        <Route path="/paiement" element={<paiement />} />
        <Route path="/parametres_compte" element={<parametres_compte />} />
        <Route path="/premiere_connexion" element={<premiere_connexion />} />
        <Route path="/recherche" element={<contact />} />
        <Route path="/reservation/:id" element={<reservation />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

