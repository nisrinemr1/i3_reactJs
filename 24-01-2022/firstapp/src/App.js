import './App.css';
import Welcome from './components/welcome/welcome';
import Message from './components/message/message';
import Person from './components/personne/person'
import FruitList from './components/fruit-list/fruit-list'

function App() {
  return (
    <div className="App">
      <div>
      <Welcome name="Shamallow"/>

      {/* On ajoute du typage pour qu'il ne mette pas un chifre 42 pour le nom d'autheur */}
      <Message author="DdangKong" content="Hello"/>
      <Message author="Bulgogi" content="Darkness"/>
      <Message author="Niah" content="My old friend"/>
      </div>
      <div>
        <h2>Demo 2</h2>
        <Person firstname ='Zaza' lastname='Vanderquack' gender='F'/>
        <hr/>
          <FruitList />
      </div>
    </div>
  );
}

export default App;
