import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import header from './Components/header';
import footer from './Components/footer';
import accueil from './Pages/accueil';
import connexion from './Pages/connexion';
import contact from './Pages/contact';
import reservation from './Pages/reservation';
import creation_compte from './Pages/creation_compte';


import './App.css'; 

function App() {
  return (
    <Router>
      <div id="root">
        <header />
        <main>
          <Routes>       
             
            <Route path="/" element={<accueil />} />
            <Route path="/connexion" element={<connexion />} />
            <Route path="/contact" element={<contact/>} />
            <Route path="/users/:role" element={<connexion />} />

            <Route path="/reservation/:id" element={<reservation />} />
          

          </Routes>
        </main>
        <footer>
          
        </footer>
      </div>
</Router>
  );
}

export default App;

