import { useState } from 'react';
import './App.css';
import ManipulationTableau from './component/manipulation-tableau/manipulation-tableau';
import Reservoir from './component/reservoir/reservoir';
import SearchBar from './component/search-bar/search-bar';

function App() {

  const [message, setMessage] = useState('');

  //et vu qu'on a mit les deux fonction, les loops ne vont plus servir ! Elles ne sont qu'une protection ! 
  const handleReservoirPlein = () => {
    setMessage('Le reservoir est plein');
  };

  const handleReservoirVide = () => {
    setMessage('Le reservir est vide');
  };

  const handleSearchResult = data => {
    console.log('On recherche :' + data)
  }


  return (
    <div className="App">
      <h1>Demo 05 - La communication</h1>

      <h2>Gestion du reservoir</h2>
      <Reservoir onReservoirPlein = {handleReservoirPlein}
                  onReservoirVide = {handleReservoirVide}/>

      {message && (
        <p>{message}</p>
      )}

      < hr/>

      <h2>Barre de recherce</h2>
      <SearchBar hint="Niah" 
        onSearch={handleSearchResult}/>

        <hr/>
        <h2>Exemple de manipulation de tableau</h2>
        <ManipulationTableau />

    </div>
  );
}

export default App;

//retrouver le map!!!!!!!!
//pour modifier le tableau. De base on faisait avec un push et un slice, mais ça va poser problème.