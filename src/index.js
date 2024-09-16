
import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // Code qui doit être exécuté quand le composant est monté
    console.log('Composant monté');
  }, []); // Le tableau vide signifie que cela ne s'exécute qu'une fois, à l'initialisation.

  return (
    <div>
      <h1>Bienvenue dans Les Amis Des Pattes</h1>
    </div>
  );
}

export default MyComponent;
