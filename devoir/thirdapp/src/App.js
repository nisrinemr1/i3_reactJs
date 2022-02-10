import './App.css';
import Compteur from './component/compteur'

function App() {
  return (
    <div className="App">
      <h1>Exercice 3</h1>

      <Compteur step={1} />
      <hr/>
      <Compteur step={3} />
      <hr/> 
      <Compteur step={10} />
    </div>
  );
}

export default App;
