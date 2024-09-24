import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
// 

import Accueil from './Pages/Accueil';
import Header from './Components/Header'; 
import Footer from './Components/Footer'; 
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
  return <>
<BrowserRouter>
  <Header></Header>
  <Routes>
    <Route path="/" element={<Accueil />} />
  </Routes>
  <Footer></Footer>
</BrowserRouter>

  </>
}

export default App;

