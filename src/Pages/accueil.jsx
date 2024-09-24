import React from "react";
import './accueil.css';
import manWithCat from '../assets/images/ManWithCat.jpg';
import fourDogs from '../assets/images/FourDogs.jpg';

const Accueil = () => {
  return (
    <>
      <div className="welcome_page">
        <h1>Présentation du site</h1>
        <p id="introduction" className="text">
          Les Amis des Pattes est un site permettant la mise en relation de propriétaires d’animaux (chats, chiens, NAC) et de Pet Sitters.
        </p>
        <p id="goal" className="text">
          Ce site se veut un site de proximité permettant de trouver le Pet Sitter non loin de chez soi. De même pour le Pet Sitter, afin de lui éviter de longs déplacements pour effectuer la visite au domicile du propriétaire afin de s’occuper de ses animaux durant son absence.
        </p>
        <p id="text_guide" className="text">
          Vous pouvez accéder à la rubrique qui vous intéresse en cliquant directement sur l'un des blocs ci-dessous.
        </p>
        <div id="boxes_presentation">
          <a href="./premiere_connexion.jsx" className="box_presentation">
            <div>
              <p className="text">Vous êtes propriétaire d'un ou plusieurs animaux ?</p>
            </div>
            <div className="image_container_welcome_page">
              <img
                src={manWithCat}
                alt="homme barbu avec chat gris tigré"
                className="image_welcome_page"
              />
            </div>
          </a>
          <a href="./premiere_connexion.html" className="box_presentation">
            <div>
              <p className="text">Vous êtes Pet Sitter ?</p>
            </div>
            <div className="image_container_welcome_page">
              <img
                src={fourDogs}
                alt="quatre chiens de races différentes en laisse et assis"
                className="image_welcome_page"
              />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Accueil;
