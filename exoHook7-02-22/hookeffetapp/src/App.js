import logo from './logo.svg';
import './App.css';
import Horloge from './component/heureEtDate/horloge'
import { useState } from 'react';
import DateDuJour from './component/heureEtDate/dateDuJour';

function App() {

  const [display , setDisplay] = useState(false);

  return (
    <div className="App">
      <h1>Exo : Le cyle de vie des composants </h1>
      <button onClick={() => setDisplay(c => !c)}>Toggle</button>
      
      {display? (
        <Horloge />
      ):(
        <DateDuJour />
      )}
    </div>
  );
}

export default App;
